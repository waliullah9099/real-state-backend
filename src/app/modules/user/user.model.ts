import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import mongoose, { Schema } from 'mongoose';
import config from '../../config';
import { USER_ROLE, USER_SATUS } from './user.constant';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'This email is not available'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: Object.keys(USER_ROLE),
    },
    profileImage: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: Object.keys(USER_SATUS),
      default: USER_SATUS.ACTIVE,
    },
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // },  
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user?.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = mongoose.model<TUser>('User', userSchema);
