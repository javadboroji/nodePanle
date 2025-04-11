import { Request, Response } from "express";
import errorHelper from "../../helpers/errorHelper.js";
import responseHelper from "../../helpers/responseHelper.js";
import PostCategory from "../../models/postCategory.js";
import baseService from "../../services/baseService/baseService.js";
//Error Helper
const errorResponse = new errorHelper();
 class PostCategoryController extends baseService {
  constructor() {
    super(PostCategory);
  }
  async getAllPostCategories(req: Request, res: Response) {
    try {
      const postCategories = await this.getAll();
      if (!postCategories) {
        return responseHelper({
          res,
          status: 404,
          message: "No users found",
          data: null,
          error: null,
        });
      }
      return responseHelper({
        res,
        status: 200,
        message: "Post categories fetched successfully",
        data: postCategories,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        errorResponse.getError(res, 500, "Internal server error")
      );
    }
  }
}

export default PostCategoryController;
