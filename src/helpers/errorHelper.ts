import { Response, response } from "express";

type TerrorHelper = 500 | 400 | 401 | 403 | 404 | 422 | 503;
class errorHelper {
  constructor() {}
  getError(res:Response ,errorStatus: TerrorHelper , errorMessage: string) {
    switch (errorStatus) {
      case 500:
        return {
          res: res,
          status: 500,
          message: errorMessage,
          data: null,
          error: errorMessage,
        };
      case 400:
        return {
          res: res,
          status: 400,
          message: errorMessage,
          data: null,
          error: errorMessage,
        };
      case 404:
        return {
          res: res,
          status: 404,
          message: errorMessage,
          data: null,
          error: errorMessage,
        };
      default:
        return {
          res: res,
          status: 500,
          message: errorMessage,
          data: null,
          error: errorMessage,
        };
    }
  }
}

export default errorHelper;
