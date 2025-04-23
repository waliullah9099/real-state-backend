import { TProperty } from "./property.interface";
import { Property } from "./property.model";

const createPropertyIntoDB = async(payload: TProperty) => {
    const result = await Property.create(payload);
    return result
}

const getAllProgertyFromDB = async() => {
    const result = await Property.find();
    return result
}
const getSinglePropertyFromDB = async(id: string) => {
    const result = await Property.findById(id);
    return result
}
const updatePropertyIntoDB = async(id: string, payload: Partial<TProperty>) => {
    const result = await Property.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result
}
const deletePropertyFromDB = async(id: string) => {
    const result = await Property.findByIdAndDelete(id);
    return result
}
export const propertyServices = {
    createPropertyIntoDB,
    getAllProgertyFromDB,
    getSinglePropertyFromDB,
    updatePropertyIntoDB,
    deletePropertyFromDB

}