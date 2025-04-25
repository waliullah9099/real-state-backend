import { z } from 'zod';
import { USER_ROLE, USER_SATUS } from './user.constant';

const createUserSchema = z.object({
  body: z.object({
    // data: z.object({
    name: z.string(),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string(),
    role: z.nativeEnum(USER_ROLE).default(USER_ROLE.USER),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false),
    status: z.nativeEnum(USER_SATUS).default(USER_SATUS.ACTIVE),
    //   }),
  }),
});

const updateUserSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_ROLE).optional(),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false),
    status: z.nativeEnum(USER_SATUS).optional(),
  }),
});

export const userValidationSchema = {
  createUserSchema,
  updateUserSchema,
};
