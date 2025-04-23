import express from 'express';
import { UserController } from './user.controler';
import validateRequest from '../../middlewares/validateRequest';
import { userValidationSchema } from './user.validation';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidationSchema.createUserSchema),
 auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  UserController.createUser,
);

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
