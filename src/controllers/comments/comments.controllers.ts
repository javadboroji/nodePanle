import { Request, Response } from "express";
import Comment from "../../models/comments.js";
import baseService from "../../services/baseService/baseService.js";
import { commentInput, validateCreateComment } from "./comment.validator.js";
import errorHelper from "../../helpers/errorHelper.js";
import responseHelper from "../../helpers/responseHelper.js";
const ErrorResponse =new errorHelper()
class CommentsController extends baseService{

constructor(){
    super(Comment)
}
/*=========================================== Create New Comment ===========================================*/
    async createComment(req:Request<{},{},commentInput> ,res:Response){
        const requestBody =req.body;
     const isValid=   validateCreateComment(requestBody )
        ///Check Body data Is Valid
      if(!isValid.isValid) {
        responseHelper(
            ErrorResponse.getError({
                res:res,
                errorStatus:400,
                errorMessage:isValid.message
            })
        )     
      }
      this.create({
        ...requestBody,
        status:false
      })
      
      

    }




}