import Lesson from '../models/lesson_model';

export const getLesson = (req, res) => {
  Lesson.findById({ lessonid: req.params.id }).then((response) => {
    res.json(response);
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export default getLesson;
