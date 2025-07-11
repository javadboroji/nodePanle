import { Router, Request, Response } from "express";
import UserController from "../../controllers/users/user.controllers.js";
import authenticateToken from "../../middleware/authenticateToken.ts";

const userRouter = Router();

const userController = new UserController();
userRouter.post("/getAll", authenticateToken, (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

export default userRouter;
