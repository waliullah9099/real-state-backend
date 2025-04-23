import { NextFunction, Request, Response } from "express"
import { UserServices } from "./user.services"
import  httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserServices.createUserIntoDB(req.body);
        
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User created succesfully',
            data: result,
          });
        
    } catch (error) {
        next(error)
    }
} 


export const UserController = {
    createUser
}