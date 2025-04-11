import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.js";
import User from "../../models/users.js";
import responseHelper from "../../helpers/responseHelper.js";
import errorHelper from "../../helpers/errorHelper.js";
//Error Helper
const errorResponse = new errorHelper();

class UserController extends baseService {
  constructor() {
    super(User);
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.getAll();

      if (!users) {
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
        message: "Users fetched successfully",
        data: users,
        error: null,
      });
    } catch (error) {
      return responseHelper(
        errorResponse.getError(res, 500, "Internal server error")
      );
    }
  }
}

export default UserController;
