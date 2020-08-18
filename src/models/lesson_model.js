import mongoose, { Schema } from 'mongoose';

const LessonSchema = new Schema({
  lessonid: String,
  title: String,
  description: String,
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

// {
//     "lessonid": "Pitch1",
//     "pages":
//     [
//     {
//       "page_number": 1,
//       "content":
//       {
//         "title": "Pitch 1",
//         "description": "Spaces on the Treble Clef",
//       },
//       "act_type1":
//       {
//         "title": "Pitch 1",
//         "instructions": "the “lesson” part, which explains the concept you’re practicing (ex: quarter note explanation from figma design)",
//         "flat_score": "5f3c2ef49b7a0675af6ac0e7",
//         "flat_appId": "5f31d0690692f8689b6682fb",
//         "flat_sharingkey": "3445da89b13dca678ffa778c5caeff82ee8e119c80b60dab9b4428ba8eac57a07bedba9332e157c0fff4278912fe27fc462fcc02afd963468b6242d4d8083bfb",
//         "textbox_count": 8,
//         "correct_answers": ["f", "a", "c", "e","c", "f", "e", "a"],
//       },
//       "badge": "Pitch beginner1",
//     },
//     {
//         "page_number": 2,
//         "content":
//         {
//           "title": "Spaces on the Treble Clef",
//           "description": "Spaces on the Treble Clef",
//         },
//         "act_type1":
//         {
//           "title": "Pitch 1",
//           "instructions": "On the treble clef, there are five lines and four spaces. Each line and each space represents a different pitch. The different pitches we need to worry about for now are the letters A-G. That means, for now, every line and every space on the treble clef will represent an A, B, C, D, E, F, or G. Let’s start with the spaces. From the bottom space to the top space, the letters are F-A-C-E!",
//           "flat_score": "5f3c2ef49b7a0675af6ac0e7",
//           "flat_appId": "5f31d0690692f8689b6682fb",
//           "flat_sharingkey": "3445da89b13dca678ffa778c5caeff82ee8e119c80b60dab9b4428ba8eac57a07bedba9332e157c0fff4278912fe27fc462fcc02afd963468b6242d4d8083bfb",
//           "textbox_count": 8,
//           "correct_answers": ["f", "a", "c", "e","c", "f", "e", "a"],
//         },
//         "badge": "Pitch beginner2",
//     }
//     ],
//   }

//   https://aptitune-api.herokuapp.com/

// // CORRECT FORMAT
//   {
//     "_id": {
//         "$oid": "5f3c483b849e7fb7e2009156"
//     },
//     "lessonid": "Pitch1",
//     "pages": [{
//         "page_number": "0",
//         "content": {
//             "title": "Pitch 1",
//             "description": "Spaces on the Treble Clef"
//         },
//         "act_type1": {
//             "title": "Pitch 1",
//             "instructions": "the “lesson” part, which explains the concept you’re practicing (ex: quarter note explanation from figma design)",
//             "flat_score": "5f3c2ef49b7a0675af6ac0e7",
//             "flat_appId": "5f31d0690692f8689b6682fb",
//             "flat_sharingkey": "3445da89b13dca678ffa778c5caeff82ee8e119c80b60dab9b4428ba8eac57a07bedba9332e157c0fff4278912fe27fc462fcc02afd963468b6242d4d8083bfb",
//             "textbox_count": {
//                 "$numberInt": "8"
//             },
//             "correct_answers": ["f", "a", "c", "e", "c", "f", "e", "a"],
//             "badge": "Pitch Beginner 1"
//         }
//     }]
// }
