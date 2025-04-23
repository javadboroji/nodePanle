import { Request, Response } from "express";
import Comment from "../../models/comments.js";
import baseService from "../../services/baseService/baseService.js";
import { commentInput, validateCreateComment } from "./comment.validator.js";
import errorHelper from "../../helpers/errorHelper.js";
import responseHelper from "../../helpers/responseHelper.js";
const ErrorResponse = new errorHelper();





class CommentsController extends baseService {
  constructor() {
    super(Comment);
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
    
      const result = await this.create(requestBody );
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
    } catch (error:any) {
        console.log(error ,'**********************************');
        
      return responseHelper(
        ErrorResponse.getError({
          res: res,
          errorStatus: 500,
          errorMessage: `Internal server error ${error.message }`,
        })
      );
    }
  }
}
export default CommentsController