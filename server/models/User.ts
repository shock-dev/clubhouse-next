import { model, Schema } from 'mongoose';
import { IUser } from '../types/user';

const user: Schema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String
  },
  isActive: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String
  }
}, {
  timestamps: true
});

export default model<IUser>('User', user);
