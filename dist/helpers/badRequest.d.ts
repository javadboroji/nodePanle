import { Response } from "express";
export declare const badRequest: (res: Response, message: string) => void;
export declare const missingFields: <T extends Record<string, any>>(res: Response, fields: (keyof T)[], reqData: T) => Response | void;
