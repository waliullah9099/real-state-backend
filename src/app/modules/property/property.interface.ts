export type TProperty = {
  title: string;
  description: string;
  price: number;
  images?: string[];
  thumbNailImage: string;
  type: 'Apartment' | 'House' | 'Land' | string;
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Rented';
  bedrooms: number;
  bathrooms: number;
  city: string;
  country: string;
  propertyAddress: string;
  squareFoot?: number;
  isFeatured?: boolean;
  buildYear?: string;
};
