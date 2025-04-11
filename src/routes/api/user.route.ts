import { Router, Request, Response } from "express";
import UserController from "../../controllers/users/user.controllers.js";

const userRouter = Router();

const userController = new UserController();
userRouter.get("/getAll", (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

export default userRouter;
