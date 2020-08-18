import mongoose, { Schema } from 'mongoose';

const LessonSchema = new Schema({
  lessonid: String,
  pages: [{
    page_number: Number,
    content: {
      title: String,
      description: String,
    },
    act_type1: {
      title: String,
      instructions: String,
      flat_score: String,
      flat_appId: String,
      flat_sharingkey: String,
      textbox_count: Number,
      correct_answers: Array,
    },
    badge: String,
  },
  ],
});

const LessonModel = mongoose.model('Lesson', LessonSchema);

export default LessonModel;
