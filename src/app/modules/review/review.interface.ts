import { Types } from "mongoose";

export type TReview = {
    userId: Types.ObjectId;
    propertyId: Types.ObjectId;
    rating?: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}