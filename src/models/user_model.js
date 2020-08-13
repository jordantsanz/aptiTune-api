import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  lesson1: Boolean,
  lesson2: Boolean,
  lesson3: Boolean,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const UserModel = mongoose.model('Lesson', UserSchema);

export default UserModel;
