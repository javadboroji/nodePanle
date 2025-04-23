import { Request, Response } from "express";
import AuthService from "../../services/authSerice/authService.js";
import User from "../../models/users.js";
import responseHelper from "../../helpers/responseHelper.js";
import errorHelper from "../../helpers/errorHelper.js";
import hashPassword from "../../helpers/hashPassword.js";
//Service Call
const authService = new AuthService(User);
//Error Helper
const errorResponse = new errorHelper();
//Controller
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name)
      return responseHelper({
        ...errorResponse.getError({
          res,
          errorStatus: 400,
          errorMessage: "All fields are required",
        }),
        data: null,
      });
    //hash password
    const hashedPassword = await hashPassword(password);
    //register user
    const user = await authService.register({
      email,
      password: hashedPassword,
      name,
    });

    if (!user.user)
      return responseHelper({
        ...errorResponse.getError({
          res,
          errorStatus: 400,
          errorMessage: "User already exists",
        }),
        data: null,
      });

    return responseHelper({
      res,
      status: 201,
      message: "User created successfully",
      data: user,
      error: null,
    });
  } catch (error) {
    return responseHelper(
      errorResponse.getError({
        res,
        errorStatus: 500,
        errorMessage: "Internal server error",
      })
    );
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return responseHelper({
        ...errorResponse.getError({
          res: res,
          errorStatus: 400,
          errorMessage: "All fields are required",
        }),
        data: null,
      });
    //conver password to hash
    const hashedPassword = await hashPassword(password);
    //service call
    const user = await authService.login({ email, password });
    if (!user.user)
      return responseHelper({
        ...errorResponse.getError({
          res,
          errorStatus: 400,
          errorMessage: "Invalid email or password",
        }),
        data: null,
      });
    //send response
    return responseHelper({
      res,
      status: 200,
      message: "Login successful",
      data: { ...user.user },
      error: null,
    });
  } catch (error) {
    return responseHelper(
      errorResponse.getError({
        res,
        errorStatus: 500,
        errorMessage: "Internal server error",
      })
    );
  }
};
