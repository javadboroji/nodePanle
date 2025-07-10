import { Response } from "express";
import { productDTO } from "../../types/product.dto/product.dto.ts";
export declare const productValidator: (res: Response, reqData: productDTO) => void | Response<any, Record<string, any>>;
