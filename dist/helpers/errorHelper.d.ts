import { Response } from "express";
interface IErrorHelper {
    res: Response;
    errorStatus: 500 | 400 | 401 | 403 | 404 | 422 | 503;
    errorMessage: string;
}
declare class errorHelper {
    constructor();
    getError(arg: IErrorHelper): {
        res: Response<any, Record<string, any>>;
        status: number;
        message: string;
        data: null;
        error: string;
    };
}
export default errorHelper;
