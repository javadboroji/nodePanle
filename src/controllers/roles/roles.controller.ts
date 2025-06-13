import { Request, Response } from "express";
import roles from "../../models/roles.ts";
import baseService from "../../services/baseService/baseService.ts";
import responseHelper from "../../helpers/responseHelper.ts";
import errorHelper from "../../helpers/errorHelper.ts";
import { missingFields } from "../../helpers/badRequest.ts";
const errorResponse = new errorHelper();

class RolesController extends baseService {
  constructor() {
    super(roles);
  }
    //******************************************  GetAll Roles With Pagnation    ******************************************************** */

  async getRolesWithPagnation(req: Request, res: Response) {
    const { searchTerm, page, pageSize } = req.body;
    const columns = ["title"];
    try {
      const roles = await this.getAllWithSearch(
        searchTerm,
        page,
        pageSize,
        columns
      );

      if (!roles) {
        return missingFields(res, [""], req.body);
      }
      return responseHelper({
        res,
        status: 200,
        message: "roles found",
        data: roles,
        error: null,
      });
    } catch (error: any) {
      return responseHelper(
        errorResponse.getError({
          res,
          errorStatus: 500,
          errorMessage: error?.message || String(error),
        })
      );
    }
  }
    //******************************************  GetAll Roles    ******************************************************** */

  async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await this.getAll();
      if (!roles) {
        return responseHelper({
          res,
          status: 404,
          message: "No roles found",
          data: null,
          error: null,
        });
      }
      return responseHelper({
        res,
        status: 200,
        message: "roles found",
        data: roles,
        error: null,
      });
    } catch (error: any) {
      return responseHelper(
        errorResponse.getError({
          res,
          errorStatus: 500,
          errorMessage: error?.message || String(error),
        })
      );
    }
  }
}
export default RolesController;
