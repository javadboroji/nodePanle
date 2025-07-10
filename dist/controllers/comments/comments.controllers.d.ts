import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.js";
import { commentInput } from "./comment.validator.js";
declare class CommentsController extends baseService {
    private commentService;
    constructor();
    createComment(req: Request<{}, {}, commentInput>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    likeComment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    disLikeComment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getPostComment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default CommentsController;
