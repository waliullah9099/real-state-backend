import mongoose, { Schema } from 'mongoose';
import { TProperty } from './property.interface';
import { PROPERTY_FOR, PROPERTY_STATUS, PROPERTY_TYPE } from './property.constant';

const propertySchema = new Schema<TProperty>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required!'],
    },
    title: {
      type: String,
      required: [true, 'Property title is required!'],
    },
    description: {
      type: String,
      required: [true, 'Property description is required!'],
    },
    price: {
      type: Number,
      required: [true, 'Property price is required!'],
    },
    images: {
      type: [String],
    },
    thumbNailImage: {
      type: String,
      required: [true, 'Property thumbnail image is required!'],
    },
    type: {
      type: String,
      enum: Object.keys(PROPERTY_TYPE),
      required: true,
    },
    propertyFor: {
      type: String,
      enum: Object.keys(PROPERTY_FOR),
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: [true, 'city is required!'],
    },
    country: {
      type: String,
      required: [true, 'country is required!'],
    },
    propertyAddress: {
      type: String,
      required: [true, 'Property address is required!'],
    },
    squareFoot: {
      type: Number,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    buildYear: {
      type: String,
    },
    status: {
      type: String,
      enum: Object.keys(PROPERTY_STATUS),
      required: true,
      default: PROPERTY_STATUS.PENDING,
    },
  },
  {
    timestamps: true,
  },
);

export const Property = mongoose.model<TProperty>('Property', propertySchema);
