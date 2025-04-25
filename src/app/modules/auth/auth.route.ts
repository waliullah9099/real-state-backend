import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from '../user/user.validation';

const router = express.Router();

router.post(
  '/register',
  

  (req, res, next ) => {
    console.log("log from router: ", req);
    next()
  } ,
  
  validateRequest(userValidationSchema.createUserSchema),
  AuthController.register,
);

router.post("/login", AuthController.login)


export const AuthRouters = router;