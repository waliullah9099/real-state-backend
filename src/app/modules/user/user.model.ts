import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import mongoose, { Schema } from 'mongoose';
import config from '../../config';

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
      enum: {
        values: ['admin', 'agent', 'user'],
      },
    },
    profileImage: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user?.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.post("save", function(next) {
  const user = this;
  user.password = '';
  next
})


export const User = mongoose.model<TUser>('User', userSchema);
