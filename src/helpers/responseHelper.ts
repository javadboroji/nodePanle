import { Response } from "express";

export interface ResponseHelper {
    res: Response;
    status: number;
    message: string;
    data: object|null;
    error: string|null|unknown;
}

export interface ResponseData {
    message: string;
    data?: object;
    error?: string|null|unknown;
}

const responseHelper = ({res, status, message, data = null, error = null}: ResponseHelper) => {
    if (!res || !res.status) {
        console.error("sendResponse called without a valid response object.");
        return;
    }
    
    const response: ResponseData = { message };
    
    if (data !== null) {
        response.data = data;
    }
    
    if (error !== null) {
        response.error = error;
    }
    
    return res.status(status).json(response);
}
export default responseHelper;
