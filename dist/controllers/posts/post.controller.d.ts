import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.js";
declare class PostController extends baseService {
    constructor();
    getAllPosts(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    createPost(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    updatePost(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default PostController;
