import mongoose, { Schema } from 'mongoose';

const LessonSchema = new Schema({});

const LessonModel = mongoose.model('Lesson', LessonSchema);

export default LessonModel;
