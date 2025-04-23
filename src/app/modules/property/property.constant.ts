export const PROPERTY_TYPE = {
  Apartment: 'Apartment',
  House: 'House',
  Villa: 'Villa',
  Land: 'Land',
} as const;

export const PROPERTY_FOR = {
  For_Sale: 'For Sale',
  For_Rent: 'For Rent',
  Sold: 'Sold',
  Rented: 'Rented',
} as const;

export const PROPERTY_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;
