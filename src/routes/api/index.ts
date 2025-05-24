import authRouter from "./auth.route.js";
import { Router } from "express";
import userRouter from "./user.route.js";
import postRouter from "./post.route.js";
import commentRouter from "./comment.route.ts";
import productRouter from "./product.route.ts";
const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);
router.use("/products",productRouter)
export default router;
