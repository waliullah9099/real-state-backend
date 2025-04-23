import { z } from "zod";
import { USER_ROLE, USER_SATUS } from "./user.constant";

const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string(),
    role: z.nativeEnum(USER_ROLE),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false),
    status: z.nativeEnum(USER_SATUS).default(USER_SATUS.ACTIVE)
})

const updateUserSchema = z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_ROLE).optional(),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false),
    status: z.nativeEnum(USER_SATUS).optional()
})


export const userValidationSchema = {
    createUserSchema,
    updateUserSchema
}