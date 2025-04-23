import express from 'express';
import { UserController } from './user.controler';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidationSchema.createUserSchema),
  UserController.createUser,
);

export const UserRoutes = router;
