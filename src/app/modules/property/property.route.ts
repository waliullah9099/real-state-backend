import express from 'express';
import { propertyController } from './property.controller';
import validateRequest from '../../middlewares/validateRequest';
import { propertyValidationSchema } from './property.validation';

const router = express.Router();

router.post('/create-property', validateRequest(propertyValidationSchema.createPropertyValidationSchema), propertyController.createProperty);
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getSingleProperty);
router.get('/:id', propertyController.getSingleProperty);
router.patch('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

export const propertyRoute = router;
