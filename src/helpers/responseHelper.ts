import { Response } from "express";

export interface ResponseHelper {
    res: Response;
    status: number;
    message: string;
    data: object|null;
    error: string|null|unknown;
    total?: number|null;
    totalPages?: number|null;
    currentPage?: number|null;  
}

export interface ResponseData {
    message: string;
    data?: object;
    error?: string|null|unknown;
    total?: number|null;
    totalPages?: number|null;
    currentPage?: number|null;  
}

const responseHelper = ({res, status, message, data = null, error = null, total = null, totalPages = null, currentPage = null}: ResponseHelper) => {
    if (!res || !res.status) {
        console.error("sendResponse called without a valid response object.");
        return;
    }
    
    const response: ResponseData = { message };
    
    if (data !== null) {
        response.data = data;
        response.total = total;
        response.totalPages = totalPages;
        response.currentPage = currentPage;
    }
    
    if (error !== null) {
        response.error = error;
    }
    
    return res.status(status).json(response);
}
export default responseHelper;
