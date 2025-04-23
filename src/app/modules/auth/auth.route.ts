import jwt from 'jsonwebtoken';
import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from '../user/user.validation';
import config from '../../config';

const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidationSchema.createUserSchema),
  (req, res, next) => {
    const token = req?.headers?.authorization;
    const verifiedToken = jwt.verify(token as string, config.jwt_access_secret as string)
    console.log(verifiedToken);
    next()
  },
  AuthController.register,
);

router.post("/login", AuthController.login)


export const AuthRouters = router;