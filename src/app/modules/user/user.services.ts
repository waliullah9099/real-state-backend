import { TUser } from "./user.interface";
import { User } from "./user.model";


const getAllUsesFromDB = async () => {
    const result = await User.find();
    return result
}

const getSingleUserFromDB = async(id: string) => {
    const result = await User.findById(id);
    return result
}

const updataUserIntoDB = async(id: string, payload: Partial<TUser> ) => {
    const result = await User.findByIdAndUpdate(id, payload, {new: true})
    return result
}

const deleteUser = async(id: string) => {
    const result = await User.findByIdAndDelete(id);
    return result
}

export const UserServices = {
    getAllUsesFromDB,
    getSingleUserFromDB,
    updataUserIntoDB,
    deleteUser
}