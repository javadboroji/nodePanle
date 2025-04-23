import { Request, Response, Router } from "express";
import CommentsController from "../../controllers/comments/comments.controllers.js";
const commentRouter = Router();

const commentController = new CommentsController();

commentRouter.post("/addComment", (req: Request, res: Response) => {
  commentController.createComment(req, res);
});
export default commentRouter