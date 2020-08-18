import Lesson from '../models/lesson_model';

export const getLesson = (req, res) => {
  console.log('getLesson called');
  Lesson.findById(req.params.id)
    .then((response) => {
      console.log('lesson response in getLesson: ', response);
      res.json(response);
    })
    .catch((error) => {
      console.log('error in getLesson');
      res.status(500).json({ error });
    });
};

export const getLessons = (req, res) => {
  console.log('getLessons called');
  Lesson.find()
    .then((response) => {
      console.log('lesson response in getLessons: ', response);
      res.json(response);
    })
    .catch((error) => {
      console.log('error in getLessons');
      res.status(500).json({ error });
    });
};

/* export const makeLesson = (req, res) => {
  const lesson = new Lesson({
    lessonid: req.body.lessonid,
    pages: [{
      page_number: req.body.pages.page_number,
      title: req.body.title,
      description: String,
      content: {
        title: req.body.title,
        description: req.body.description,
      },
      act_type1: {
        title: req.body.title,
        instructions: req.body.instructions,
        flat_score: req.body.flat_score,
        flat_appId: req.body.flat_appId,
        flat_sharingkey: req.body.flat_sharingkey,
        textbox_count: req.vody.textbox_count,
        correct_answers: req.body.correct_answers,
      },
      badge: req.body.badge,
    },
    ],
  }); */

//   lesson.save()
//     .then(() => {
//       console.log('new lesson saved.');
//       res.send('lesson creation worked');
//     })
//     .catch((error) => {
//       res.status(500).json({ error });
//     });
// };

export default getLesson;
