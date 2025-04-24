import { USER_ROLE } from "./user.constant";
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

const myProfile = async(_id: string, role: string) => {
    let result = null
    
    if (role === USER_ROLE.SUPER_ADMIN || role === USER_ROLE.ADMIN || role === USER_ROLE.AGENT || role === USER_ROLE.USER) {
        result = await User.findById(_id)
    }
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
    myProfile,
    updataUserIntoDB,
    deleteUser
}