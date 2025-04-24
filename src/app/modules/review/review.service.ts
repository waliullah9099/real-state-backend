import { TReview } from "./review.interface";
import { Review } from "./review.model";


const createReview = async (payload: TReview) => {
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
