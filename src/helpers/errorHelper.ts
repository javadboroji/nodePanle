import { Response, response } from "express";
interface IErrorHelper{
  res:Response
  errorStatus: 500 | 400 | 401 | 403 | 404 | 422 | 503
  errorMessage: string

}

class errorHelper {
  constructor() {}

  
  getError(arg:IErrorHelper) {
    switch (arg.errorStatus) {
      case 500:
        return {
          res: arg.res,
          status: 500,
          message: arg.errorMessage,
          data: null,
          error: arg.errorMessage,
        };
      case 400:
        return {
          res: arg.res,
          status: 400,
          message: arg.errorMessage,
          data: null,
          error: arg.errorMessage,
        };
      case 404:
        return {
          res: arg.res,
          status: 404,
          message:  arg.errorMessage,
          data: null,
          error:  arg.errorMessage,
        };
      default:
        return {
          res: arg.res,
          status: 500,
          message:  arg.errorMessage,
          data: null,
          error:  arg.errorMessage,
        };
    }
  }
}

export default errorHelper;
