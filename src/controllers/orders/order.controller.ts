import { Request, Response } from "express";
import errorHelper from "../../helpers/errorHelper.ts";
import responseHelper from "../../helpers/responseHelper.ts";
import orders from "../../models/orders.ts";
import baseService from "../../services/baseService/baseService.ts";
import { IOrder } from "../../types/order.dto/order.dto.ts";
import { productValidator } from "../products/product.validator.ts";
const errorResponse = new errorHelper();

class OrderCategory extends baseService {

    constructor() {
        super(orders)
    }

    async addOrder(req: Request, res: Response) {
         const reqData:IOrder=  req.body;
        try {
           
        } catch (error) {
            return responseHelper(
                errorResponse.getError({
                    res, errorStatus: 500, errorMessage: "Internal server error"
                })
            );
        }
    }

}