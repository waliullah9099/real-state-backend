import express from 'express';
import { UserController } from './user.controler';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/me', auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN, USER_ROLE.AGENT, USER_ROLE.USER), UserController.myProfile);
router.get('/:id', UserController.getSingleUser);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export const UserRoutes = router;
