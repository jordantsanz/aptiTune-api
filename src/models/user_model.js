import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  badges: Array,
  Lessons: {
    toDo: Array,
    completed: Array,
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const UserModel = mongoose.model('Lesson', UserSchema);

export default UserModel;
