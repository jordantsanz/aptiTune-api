import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({})

const NoteModel = mongoose.model('Lesson', NoteSchema);

export default NoteModel;