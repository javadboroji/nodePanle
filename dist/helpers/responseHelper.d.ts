import { Response } from "express";
export interface ResponseHelper<T = any> {
    res: Response;
    status: number;
    message: string;
    data?: T | null;
    error: string | null | unknown;
    total?: number;
    totalPages?: number;
    currentPage?: number;
}
export interface ResponseData<T = any> {
    message: string;
    data?: object;
    error?: string | null | unknown;
    total?: number;
    totalPages?: number;
    currentPage?: number;
}
declare const responseHelper: ({ res, status, message, data, error, total, totalPages, currentPage, }: ResponseHelper) => Response<any, Record<string, any>> | undefined;
export default responseHelper;
