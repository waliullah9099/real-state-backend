
import express from 'express';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidationSchema } from './review.validation';

const router = express.Router();

router.post("/create-ceview", validateRequest(ReviewValidationSchema.createReviewValidationSchema), ReviewController.createReview);
router.get("/", ReviewController.getAllReviews);
router.get("/:id", ReviewController.getSingleReview);
router.patch("/:id", validateRequest(ReviewValidationSchema.updateReviewValidationSchema), ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);
router.get("/property/:propertyId", ReviewController.getReviewByPropertyId);
router.get("/user/:userId", ReviewController.getReviewByUserId);



export const ReviewRoutes = router