import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const isPasswordMatched = async (plainPassword: string, hashedPassword: string) => {
    const isMatched = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatched;
}


export const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret) as JwtPayload
}