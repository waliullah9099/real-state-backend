import express from 'express';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidationSchema } from './review.validation';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/property/:propertyId/reviews',
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN, USER_ROLE.AGENT, USER_ROLE.USER),
  validateRequest(ReviewValidationSchema.createReviewValidationSchema),
  ReviewController.createReview,
);
router.get('/', ReviewController.getAllReviews);
router.get('/:id', ReviewController.getSingleReview);
router.patch(
  '/:id',
  validateRequest(ReviewValidationSchema.updateReviewValidationSchema),
  ReviewController.updateReview,
);
router.delete('/:id', ReviewController.deleteReview);
router.get('/property/:propertyId', ReviewController.getReviewByPropertyId);
router.get('/user/:userId', ReviewController.getReviewByUserId);

export const ReviewRoutes = router;
