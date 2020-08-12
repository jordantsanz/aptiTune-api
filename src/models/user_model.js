import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({})

const UserModel = mongoose.model('Lesson', UserSchema);

export default UserModel;