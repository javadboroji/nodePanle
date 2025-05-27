import baseService from "../../services/baseService/baseService.ts";
import  Products from"../../models/products.ts";
import responseHelper from "../../helpers/responseHelper.ts";
import { Request, Response } from "express";
import errorHelper from "../../helpers/errorHelper.ts";
import { v4 as uuidv4 } from "uuid";
import { productDTO } from "../../types/product.dto/product.dto.ts";
import  { missingFields } from "../../helpers/badRequest.ts";
import { productValidator } from "./product.validator.ts";
const errorResponse = new errorHelper();
class ProductsController extends baseService {
    constructor() { super(Products)}
    //******************************************  GetProduct    ******************************************************** */
    async getProducts(req: Request, res: Response) {
        const { searchTerm, page, pageSize } = req.body;
        const columns = ["title"];
        try {
         const products=   await this.getAllWithSearch(
                searchTerm,
                page,
                pageSize,
                columns
            ) ;

            if(!products) {
                return responseHelper(
                    {
                        res,
                        status: 404,
                        message: "No Products found",
                        data: null,
                        error: null,
                    }
                )
            }
            return responseHelper(
                {
                    res,
                    status: 200,
                    message: "Products found",
                    data: products,
                    error: null,
                }
            )
        } catch (error:any) {

            return responseHelper(
                errorResponse.getError({
                  res,
                  errorStatus: 500,
                  errorMessage: error?.message || String(error),
                })
              );
        }
    }
    //******************************************  AddProduct    ******************************************************** */
    async addProduct(req: Request, res: Response) {
        const reqData:productDTO=  req.body;
        productValidator(res , reqData);
        try {
            const createResponse=  await this.create({...reqData ,sku:uuidv4() });
               if(!createResponse) {
                return responseHelper(
                    {
                        res,
                        status: 400,
                        message: "Product not created",
                        data: null,
                        error: null,
                    }
                )
            }
            return responseHelper({
                res,
                status: 200,
                message: "Product created",
                data: createResponse,
                error: null,
            })
                
            
        } catch (error:any) {
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
export default ProductsController;