import { Document } from 'mongoose';

export interface IUser extends Document {
  fullname: string
  avatarUrl: string
  isActive: number
  username: string
  phone: string
}
