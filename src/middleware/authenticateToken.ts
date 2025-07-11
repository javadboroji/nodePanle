import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthService from "../services/authSerice/authService.js";
import User from "../models/users.js";
import cookie from "cookie";
declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}
const authService = new AuthService(User);
const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      res.status(401).json({ message: 'No token provided' });
      return
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.user = decoded;
    const user = await authService.checkUserExists(decoded.id);
    if (!user) res.status(401).json({ message: "Invalid token" });

    next();
  } catch (error) {

    res.status(403).json({ message: "Invalid token" });
  }
};

export default authenticateToken;
