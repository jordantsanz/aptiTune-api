// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jwt-simple';
import User from '../models/user_model';

export const getUserInfo = (req, res) => {
  User.findOne({ username: req.body.username }).then((result) => {
    console.log(result);
    res.send(result);
  })
    .catch((error) => {
      res.status(455).send('cannot load user info');
    });
};

export const signin = (req, res, next) => {
  console.log(req.user.username);
  res.send({ token: tokenForUser(req.user), username: req.user.username });
};

export const signup = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;

  if (!email || !password || !username) {
    res.status(422).send('You must provide email, username and password! ');
  }

  User.findOne({ email: req.body.email }).then((result) => {
    if (result != null) {
      res.status(429).send('User already exists. ');
    } else {
      const newuser = new User();
      newuser.email = req.body.email;
      newuser.password = req.body.password;
      newuser.username = req.body.username;
      newuser.badges = [];
      newuser.completedLessons = [];
      newuser.save().then((response) => {
        res.send({ token: tokenForUser(response) });
      });
    }
  });
};

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const addFinishedLesson = (req, res) => {
  User.findByIdAndUpdate(req.params.username, req.body).then((response) => {
    // Do some more stuff here.
    res.json(response);
  })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const loadHomepageWithUser = (req, res) => {
  User.findOne({ username: req.body.username }).then((result) => {
    console.log(result);
    res.send(result);
  })
    .catch((error) => {
      res.status(455).send('cannot load user info');
    });
};
