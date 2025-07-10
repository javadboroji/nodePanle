import { Request, Response } from "express";
import baseService from "../../services/baseService/baseService.js";
declare class UserController extends baseService {
    constructor();
    getAllUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default UserController;
