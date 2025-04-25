import { Request, Response, Router } from "express";
import CommentsController from "../../controllers/comments/comments.controllers.js";
const commentRouter = Router();

const commentController = new CommentsController();

commentRouter.post("/addComment", (req: Request, res: Response) => {
  commentController.createComment(req, res);
});
commentRouter.post("/commentLike", (req: Request, res: Response) => {
  commentController.likeComment(req, res);
});
commentRouter.post("/commentDisLike", (req: Request, res: Response) => {
  commentController.disLikeComment(req, res);
});
commentRouter.get("/postComments/:postId", (req: Request, res: Response) => {
  commentController.getPostComment(req, res);
});
export default commentRouter;
