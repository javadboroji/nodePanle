import { Request, Response } from "express";
import errorHelper from "../../helpers/errorHelper.js";
import responseHelper from "../../helpers/responseHelper.js";
import post from "../../models/posts.js";
import baseService from "../../services/baseService/baseService.js";
import { IPosts } from "../../types/express/index.js";

const errorResponse = new errorHelper();
class PostController extends baseService {
  constructor() {
    super(post);
  }

  /*============================================ Get All====================================================*/

  async getAllPosts(req: Request, res: Response) {
    try {
      const { searchTerm, page, pageSize } = req.body;
      const columns = ["title", "content"];
      const posts = await this.getAllWithSearch(
        searchTerm,
        page,
        pageSize,
        columns
      );
      if (!posts) {
        return responseHelper({
          res,
          status: 404,
          message: "No posts found",
          data: null,
          error: null,
        });
      }
      console.log(posts, "****posts****");

      return responseHelper({
        res,
        status: 200,
        message: "Posts fetched successfully",
        data: posts.data,
        total: posts.totalDatas,
        totalPages: posts.totalPages,
        currentPage: posts.currentPage,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        errorResponse.getError(res, 500, "Internal server error")
      );
    }
  }

  /*=========================================== Create ===========================================*/

  async createPost(req: Request, res: Response) {
    try {
      const { title, content, category_id, user_id } = req.body;
      const image_url = req.file ? `/uploads/${req.file.filename}` : null;

      if (!title || !content || !category_id) {
        return responseHelper({
          res,
          status: 400,
          message: "All fields are required",
          data: null,
          error: null,
        });
      }

      const newPost = await this.create({
        title,
        content,
        category_id,
        user_id,
        image_url,
        status: 1,
      });
      return responseHelper({
        res,
        status: 201,
        message: "Post created successfully",
        data: newPost,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        errorResponse.getError(res, 500, "Internal server error")
      );
    }
  }

  /*=========================================== Update ===========================================*/

  async updatePost(req: Request, res: Response) {
    try {
      const { id, category_id, content, image_url, status, title, user_id } =
        req.body as IPosts;
      if (!id || !title || !content) {
        return responseHelper({
          res,
          status: 400,
          message: "id And title And content  fields are required",
          data: null,
          error: null,
        });
      }
      const response = await this.update(id, {
        category_id,
        content,
        image_url,
        status,
        title,
        user_id,
      });
      /*======= Not Found Post =======*/
      if (response === null) {
        return responseHelper({
          res,
          status: 404,
          message: "Not Found Post",
          data: null,
          error: null,
        });
      }
      return responseHelper({
        res,
        status: 201,
        message: "Post Update Success",
        data: response,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        errorResponse.getError(res, 500, "Internal server error")
      );
    }
  }
}

export default PostController;
