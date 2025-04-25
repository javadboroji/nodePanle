import { Request, Response } from "express";
import Comment from "../../models/comments.js";
import baseService from "../../services/baseService/baseService.js";
import { commentInput, validateCreateComment } from "./comment.validator.js";
import errorHelper from "../../helpers/errorHelper.js";
import responseHelper from "../../helpers/responseHelper.js";
import commentService from "../../services/commentService/commentService.ts";
const ErrorResponse = new errorHelper();
class CommentsController extends baseService {
  private commentService: commentService<Comment>;
  constructor() {
    super(Comment);
    //*commentService
    this.commentService = new commentService(Comment);
  }
  /*=========================================== Create New Comment ===========================================*/
  async createComment(req: Request<{}, {}, commentInput>, res: Response) {
    try {
      const requestBody = req.body;
      const isValid = validateCreateComment(requestBody);
      ///Check Body data Is Valid
      if (!isValid.isValid) {
        responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: isValid.message,
          })
        );
      }

      const result = await this.create(requestBody);
      if (result === null) {
        responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: " Not add comment",
          })
        );
      }

      return responseHelper({
        res,
        status: 201,
        message: "comment created successfully",
        data: result,
        error: null,
      });
    } catch (error: any) {
      return responseHelper(
        ErrorResponse.getError({
          res: res,
          errorStatus: 500,
          errorMessage: `Internal server error ${error.message}`,
        })
      );
    }
  }
  /*=========================================== Like Comment ===========================================*/

  async likeComment(req: Request, res: Response) {
    try {
      const { commentId } = req.body;
      if (!commentId)
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "CommentId is required",
          })
        );
      const commentLike = await this.commentService.likeComment(commentId);
      if (commentLike === null)
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "CommentLiked  Error",
          })
        );

      return responseHelper({
        res,
        status: 201,
        message: "comment liked successfully",
        data: commentLike,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        ErrorResponse.getError({
          res: res,
          errorStatus: 500,
          errorMessage: `Internal server error`,
        })
      );
    }
  }
  /*=========================================== disLike Comment ===========================================*/
  async disLikeComment(req: Request, res: Response) {
    try {
      const { commentId } = req.body;
      if (!commentId)
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "CommentId is required",
          })
        );
      const commentDisLike = await this.commentService.disLikeComment(
        commentId
      );
      if (commentDisLike === null)
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "CommentDisLiked  Error",
          })
        );

      return responseHelper({
        res,
        status: 201,
        message: "comment DisLike successfully",
        data: commentDisLike,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        ErrorResponse.getError({
          res: res,
          errorStatus: 500,
          errorMessage: `Internal server error`,
        })
      );
    }
  }
  /*=========================================== GetPostComment ===========================================*/
  async getPostComment(req: Request, res: Response) {
    try {
      const postId = req.params.postId;
      if (!postId) {
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "postId is required",
          })
        );
      }
      const postComments = await this.commentService.getCommentByPostId(
        Number(postId)
      );
      if (postComments === null)
        return responseHelper(
          ErrorResponse.getError({
            res: res,
            errorStatus: 400,
            errorMessage: "postComments  Error",
          })
        );
      console.log(postComments, "****postComments");

      return responseHelper({
        res,
        status: 201,
        message: "",
        data: postComments,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        ErrorResponse.getError({
          res: res,
          errorStatus: 500,
          errorMessage: `Internal server error`,
        })
      );
    }
  }
}
export default CommentsController;
