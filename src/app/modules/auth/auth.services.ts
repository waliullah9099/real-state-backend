import httpStatus from 'http-status';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';
import { TLoginUser } from './auth.interface';
import { TUser } from '../user/user.interface';
import { isPasswordMatched } from './auth.utils';
import { USER_ROLE } from '../user/user.constant';
import jwt from 'jsonwebtoken';
import config from '../../config';

const register = async (payload: TUser): Promise<TUser> => {
  // check if user already exists
  const isUserExistis = await User.findOne({ email: payload.email });
  if (isUserExistis) {
    throw new AppError(httpStatus.CONFLICT, 'User already exists');
  }

  // set user role
  payload.role = USER_ROLE.USER;

  // create user
  const newUser = await User.create(payload);
  return newUser;
};

const login = async (payload: TLoginUser) => {
  // check user
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  //  check status
  if (user.status === 'BLOCKED') {
    throw new AppError(httpStatus.BAD_REQUEST, 'User is blocked');
  }

  // check password
  const passwordMatched = await isPasswordMatched(
    payload?.password,
    user?.password,
  );
  if (!passwordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, 'password is incorrect');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
    _id: user._id
  }
  
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {expiresIn: config.jwt_access_expires_in})

  const refreshToken = jwt.sign(jwtPayload, config.jwt_refresh_secret as string, {expiresIn: config.jwt_refresh_expires_in})

  return {
    accessToken,
    refreshToken,
  }

};

export const AuthServices = {
  register,
  login,
};
