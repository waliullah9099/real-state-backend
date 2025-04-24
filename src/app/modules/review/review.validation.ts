import { z } from "zod";

const createReviewValidationSchema = z.object({
    userId: z.string().nonempty("User ID is required"),
    propertyId: z.string().nonempty("Property ID is required"),
    rating: z.number().min(1).max(5).optional(),
    comment: z.string().nonempty("Comment is required"),
})

const updateReviewValidationSchema = z.object({
    userId: z.string().optional(),
    propertyId: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    comment: z.string().nonempty("Comment is required").optional(),
})

export const ReviewValidationSchema = {
    createReviewValidationSchema,
    updateReviewValidationSchema,
}