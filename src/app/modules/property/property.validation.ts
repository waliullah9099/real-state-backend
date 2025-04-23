import { z } from 'zod';
import {
  PROPERTY_FOR,
  PROPERTY_STATUS,
  PROPERTY_TYPE,
} from './property.constant';

const createPropertyValidationSchema = z.object({
  title: z.string().min(1, { message: 'Property title is required!' }),
  description: z
    .string()
    .min(1, { message: 'Property description is required!' }),
  price: z.number({ required_error: 'Property price is required!' }),
  images: z.array(z.string()).optional(),
  thumbNailImage: z.string({
    required_error: 'Property thumbnail image is required!',
  }),
  type: z.nativeEnum(PROPERTY_TYPE),
  propertyFor: z.nativeEnum(PROPERTY_FOR),
  bedrooms: z.number({ required_error: 'Number of bedrooms is required!' }),
  bathrooms: z.number({ required_error: 'Number of bathrooms is required!' }),
  city: z.string({ required_error: 'City is required!' }),
  country: z.string({ required_error: 'Country is required!' }),
  propertyAddress: z.string({
    required_error: 'Property address is required!',
  }),
  squareFoot: z.number().optional(),
  isFeatured: z.boolean().default(false),
  buildYear: z.string().optional(),
  status: z.nativeEnum(PROPERTY_STATUS).default(PROPERTY_STATUS.PENDING),
});

const updatePropertyValidationSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Property title is required!' })
    .optional(),
  description: z
    .string()
    .min(1, { message: 'Property description is required!' })
    .optional(),
  price: z.number({ required_error: 'Property price is required!' }).optional(),
  images: z.array(z.string()).optional(),
  thumbNailImage: z
    .string({
      required_error: 'Property thumbnail image is required!',
    })
    .optional(),
  type: z.nativeEnum(PROPERTY_TYPE).optional(),
  propertyFor: z.nativeEnum(PROPERTY_FOR).optional(),
  bedrooms: z
    .number({ required_error: 'Number of bedrooms is required!' })
    .optional(),
  bathrooms: z
    .number({ required_error: 'Number of bathrooms is required!' })
    .optional(),
  city: z.string({ required_error: 'City is required!' }).optional(),
  country: z.string({ required_error: 'Country is required!' }).optional(),
  propertyAddress: z
    .string({
      required_error: 'Property address is required!',
    })
    .optional(),
  squareFoot: z.number().optional(),
  isFeatured: z.boolean().default(false),
  buildYear: z.string().optional(),
  status: z.nativeEnum(PROPERTY_STATUS).optional(),
});

export const propertyValidationSchema = {
  createPropertyValidationSchema,
  updatePropertyValidationSchema,
};
