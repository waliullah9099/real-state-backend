import { USER_ROLE, USER_SATUS } from "./user.constant";


export type TUser = {
    name: string;
    email: string;
    password: string;
    role?: keyof typeof USER_ROLE,
    profileImage?: string,
    isDeleted: boolean,
    status: keyof typeof USER_SATUS,
}