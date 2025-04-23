import { Types } from "mongoose";
import { PROPERTY_FOR, PROPERTY_STATUS, PROPERTY_TYPE } from "./property.constant";

export type TProperty = {
  user: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  images?: string[];
  thumbNailImage: string;
  type: keyof typeof PROPERTY_TYPE; 
  propertyFor: keyof typeof PROPERTY_FOR;
  bedrooms: number;
  bathrooms: number;
  city: string;
  country: string;
  propertyAddress: string;
  squareFoot?: number;
  isFeatured?: boolean;
  buildYear?: string;
  status?: keyof typeof PROPERTY_STATUS;
};
