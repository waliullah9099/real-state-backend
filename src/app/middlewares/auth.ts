import config from '../config';
import httpStatus from 'http-status';
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/user/user.model';
import { NextFunction, Request, Response } from "express";
import { USER_ROLE, USER_SATUS } from "../modules/user/user.constant";


export const auth = ( ...requiredRoles: (keyof typeof USER_ROLE)[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req?.headers?.authorization;

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }

        const decodedToken = jwt.verify(token as string, config.jwt_access_secret as string) as JwtPayload;
        const { role, email } = decodedToken;

        const user = await User.findOne({email});

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'User not found');
        }
        if (user?.isDeleted) {
            throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
        }
        if (user?.status ===  USER_SATUS.BLOCKED) {
            throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
        }
        if (user.role !== role) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }

        req.user = decodedToken as JwtPayload;
        next();
    })
}