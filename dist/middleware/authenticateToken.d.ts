import { NextFunction, Response, Request } from "express";
import { JwtPayload } from "jsonwebtoken";
declare module "express-serve-static-core" {
    interface Request {
        user?: JwtPayload;
    }
}
declare const authenticateToken: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default authenticateToken;
