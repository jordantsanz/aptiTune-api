import User from '../models/user_model';

export const getUser = (req, res) => {
  res.send('send back that USER');
};

export const addFinishedLesson = (req, res) => {
  User.findByIdAndUpdate(req.params.username, req.body).then((response) => {
    // Do some more stuff here.
    res.json(response);
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
