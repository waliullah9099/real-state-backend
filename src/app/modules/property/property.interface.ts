import { Types } from "mongoose";

export type TProperty = {
  user: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  images?: string[];
  thumbNailImage: string;
  type: 'Apartment' | 'House' | 'Land' | string;
  propertyFor: 'For Sale' | 'For Rent' | 'Sold' | 'Rented';
  bedrooms: number;
  bathrooms: number;
  city: string;
  country: string;
  propertyAddress: string;
  squareFoot?: number;
  isFeatured?: boolean;
  buildYear?: string;
  status?: 'pending' | 'approved' | 'rejected';
};
