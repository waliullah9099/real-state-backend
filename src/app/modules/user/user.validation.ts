import { z } from "zod";

const createUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum(["admin", "agent", "user"]),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false)
})

const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z.enum(["admin", "agent", "user"]).optional(),
    profileImage: z.string().optional(),
    isDeleted: z.boolean().default(false)
})


export const userValidationSchema = {
    createUserSchema,
    updateUserSchema
}