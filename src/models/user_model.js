/* eslint-disable consistent-return */
import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  badges: Array,
  toDoLessons: Array,
  completedLessons: Array,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

UserSchema.pre('save', function beforeUserSave(next) {
  const user = this;

  if (!user.isModified('password')) { return next(); } else {
    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        return next();
      });
    });
  }
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcryptjs.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
