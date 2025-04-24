import mongoose, { Schema } from "mongoose";
import { TReview } from "./review.interface";


const reviewSchema = new Schema<TReview>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
})  


export const Review = mongoose.model<TReview>("Review", reviewSchema);