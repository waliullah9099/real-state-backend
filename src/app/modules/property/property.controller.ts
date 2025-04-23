import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { propertyServices } from './property.service';
import httpStatus from 'http-status';

const createProperty = catchAsync(async (req, res) => {
  const result = await propertyServices.createPropertyIntoDB(req.body, req.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Property created successfully!',
    data: result,
  });
});

const getAllProperties = catchAsync(async (req, res) => {
  const result = await propertyServices.getAllProgertyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Properties are retrieved successfully!',
    data: result,
  });
});

const getSingleProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertyServices.getSinglePropertyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Property is retrieved successfully!',
    data: result,
  });
});

const updateProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertyServices.updatePropertyIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Property is updated successfully!',
    data: result,
  });
});

const deleteProperty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await propertyServices.deletePropertyFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Property is deleted successfully!',
    data: result,
  });
});

export const propertyController = {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty,
};