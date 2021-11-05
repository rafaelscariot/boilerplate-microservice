import { Schema } from 'mongoose';

export const SampleSchema = new Schema(
  {
    phoneNumber: { type: String },
    email: { type: String, unique: true },
    name: String,
  },
  { timestamps: true, collection: 'Sample' },
);
