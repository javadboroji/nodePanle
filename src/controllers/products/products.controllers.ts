import baseService from "../../services/baseService/baseService.ts";
import  Products from"../../models/product.ts";
import responseHelper from "../../helpers/responseHelper.ts";
import { Request, Response } from "express";
import errorHelper from "../../helpers/errorHelper.ts";
const errorResponse = new errorHelper();
class ProductsController extends baseService {
    constructor() { super(Products)}

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
        } catch (error) {
            console.log(error ,'error*********************');
            
            return responseHelper(
                errorResponse.getError({
                  res,
                  errorStatus: 500,
                  errorMessage: "Internal server error",
                })
              );
        }
    }
}
export default ProductsController;