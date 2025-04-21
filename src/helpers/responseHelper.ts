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

const responseHelper = ({
  res,
  status,
  message,
  data = null,
  error = null,
  total,
  totalPages,
  currentPage,
}: ResponseHelper) => {
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
};
export default responseHelper;
