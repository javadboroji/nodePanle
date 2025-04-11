import { Request, Response, Router } from "express";
import PostCategoryController from "../../controllers/posts/postcat.controllrs.js";
import authenticateToken from "../../middleware/authenticateToken.js";
import upload from "../../middleware/upload.js";
import PostController from "../../controllers/posts/post.controller.js";
const postRouter = Router();

const postCategoryController = new PostCategoryController();
const postController = new PostController();
postRouter.get(
  "/getAllCategories",
  authenticateToken,
  (req: Request, res: Response) => {
    postCategoryController.getAllPostCategories(req, res);
  }
);
postRouter.post(
  "/createNewPost",
  authenticateToken,
  upload.single("file"),
  (req: Request, res: Response) => {
    postController.createPost(req, res);
  }
);
postRouter.post("/getAllPosts",authenticateToken,(req:Request,res:Response)=>{postController.getAllPosts(req,res)})
export default postRouter;
