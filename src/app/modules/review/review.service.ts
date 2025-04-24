import { JwtPayload } from "jsonwebtoken";
import { TReview } from "./review.interface";
import { Review } from "./review.model";
import { User } from "../user/user.model";
import { Property } from "../property/property.model";
import mongoose from "mongoose";


const createReview = async (propertyId: string, user: any, payload: TReview) => {

    // check if the user is existing
    const existingUser = await User.findOne({email: user.email});
    if (existingUser) {
        payload.userId = existingUser._id;
    }

    // check if the property is existing
    const existingProperty = await Property.findById(propertyId);
    if (!existingProperty) {
        throw new Error("Property not found");
    }
    payload.propertyId = new mongoose.Types.ObjectId(propertyId);


    const result = await Review.create(payload);
    return result;
}

const getAllReviews = async () => {
    const result = await Review.find();
    return result;
}
const getSingleReview = async (id: string) => {
    const result = await Review.findById(id).populate("userId").populate("propertyId");
    return result;
}
const updateReview = async (id: string, payload: Partial<TReview>) => {
    const result = await Review.findByIdAndUpdate(id, payload, {
        new: true,
    })
    return result;
}
const deleteReview = async (id: string) => {
    const result = await Review.findByIdAndDelete(id);
    return result;
}
const getReviewByPropertyId = async (propertyId: string) => {
    const result = await Review.find({ propertyId }).populate("userId").populate("propertyId");
    return result;
}
const getReviewByUserId = async (userId: string) => {
    const result = await Review.find({ userId }).populate("userId").populate("propertyId");
    return result;
}


export const ReviewServices = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    getReviewByPropertyId,
    getReviewByUserId
}
