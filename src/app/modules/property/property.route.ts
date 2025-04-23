import express from 'express';
import { propertyController } from './property.controller';
import validateRequest from '../../middlewares/validateRequest';
import { propertyValidationSchema } from './property.validation';
import { auth } from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-property',
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN, USER_ROLE.AGENT),
  validateRequest(propertyValidationSchema.createPropertyValidationSchema),
  propertyController.createProperty,
);
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getSingleProperty);
router.get('/:id', propertyController.getSingleProperty);
router.patch('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

export const propertyRoute = router;
