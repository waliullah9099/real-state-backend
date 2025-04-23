

export type TUser = {
    name: string;
    email: string;
    password: string;
    role?: "admin" | "agent" | "user",
    profileImage?: string,
    isDeleted: boolean
}