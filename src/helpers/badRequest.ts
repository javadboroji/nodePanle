import { Response } from "express";
import responseHelper from "./responseHelper.ts";
export const badRequest =(res:Response ,message:string)=> {
    responseHelper({
        res,
        status: 400,
        message: `Missing fields: ${message}`,
        data: null,
        error: true,
    })
};


export const missingFields = <T extends Record<string, any>>(res:Response ,fields: (keyof T)[] ,reqData:T): Response | void =>{
    const missing = fields.filter(
        (field) =>
          reqData[field] === undefined ||
          reqData[field] === null ||
          reqData[field] === ""
      );
    if (missing.length > 0) {
        return badRequest(res, `Missing fields: ${missing.join(", ")}`);
      }
}