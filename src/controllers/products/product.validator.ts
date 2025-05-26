import { Response } from "express";
import { missingFields } from "../../helpers/badRequest.ts";
import { productDTO } from "../../types/product.dto/product.dto.ts";

export const productValidator =(res:Response, reqData:productDTO)=> {
    if(!reqData.title || !reqData.description || !reqData.price || !reqData.count ||!reqData.image_url ||!reqData.category_id) {
        return missingFields(res ,["count" ,"category_id" ,"description" ,"title" ,"image_url" ,"is_active" ,"price"]     ,reqData);
    }
}