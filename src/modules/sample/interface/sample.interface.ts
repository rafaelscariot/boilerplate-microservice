import { Document } from 'mongoose';

export interface ISample extends Document {
  readonly phoneNumber: string;
  readonly email: string;
  name: string;
}
