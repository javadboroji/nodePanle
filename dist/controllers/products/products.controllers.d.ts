import baseService from "../../services/baseService/baseService.ts";
import { Request, Response } from "express";
declare class ProductsController extends baseService {
    constructor();
    getProducts(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    addProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export default ProductsController;
