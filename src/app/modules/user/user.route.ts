import express from 'express';
import { UserController } from './user.controler';

const router = express.Router();

// router.post(
//   '/create-user',
//   validateRequest(userValidationSchema.createUserSchema),
//   UserController.createUser,
// );

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
