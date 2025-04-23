import { USER_ROLE } from "../user/user.constant";
import { User } from "../user/user.model";
import { PROPERTY_STATUS } from "./property.constant";
import { TProperty } from "./property.interface";
import { Property } from "./property.model";

const createPropertyIntoDB = async(payload: TProperty, user: any) => {

    if (user?.role === USER_ROLE.SUPER_ADMIN || user?.role === USER_ROLE.ADMIN) {
        payload.status = "approved";
    } else if (user?.role === USER_ROLE.AGENT) {
        payload.status = "pending";
    } else {
        throw new Error("You are not authorized to create a property");
    }

    const existingUser = await User.findOne({email: user?.email});
    if (existingUser) {
        payload.user = existingUser._id;
    } else {
        throw new Error("User not found");
    }

    const result = (await Property.create(payload)).populate({
        path: 'user',
        select: 'name email -_id'
    });
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