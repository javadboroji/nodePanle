import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.js";
declare class PostCategoryController extends baseService {
    constructor();
    getAllPostCategories(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default PostCategoryController;
