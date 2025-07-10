import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.ts";
declare class RolesController extends baseService {
    constructor();
    getRolesWithPagnation(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>>;
    getAllRoles(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default RolesController;
