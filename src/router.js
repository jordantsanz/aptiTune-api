import { Router } from 'express';
// import * as Lessons from './controllers/lesson_controller';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';
import * as LessonController from './controllers/lesson_controller';
// import * as Notes from './controllers/note_controller';

const router = Router();

/// routes: /:username, /:username/profile, /:username/:lessonid, /
// /:username - a page once the user signs in to their account that displays a basic page with lessons and other links.
// /:username/profile - a page showing the progress and account info of a user. Shows badges and username, etc.
// /:username/:lessonid - a page for each specific lesson module with every page of the lesson at the same route (need :username/ to force authentication.)
// / - home page, not signed into any user account.

/* router.get('/', (req, res) => {
  res.json({ message: 'welcome to our api!' });
}); */

// router.route('/')
//   .get(UserController.loadHomepagewithoutUser);

router.route('/withuser')
  .get(UserController.loadHomepageWithUser, requireAuth);

router.route('withuser/lessons')
  .get(LessonController.getLessons);
// add /username/:lessonid later for authentication purposes
router.route('lessons/:id')
  .get(LessonController.getLesson);

// router.route('/:username/profile')
//   .get(requireAuth, UserController.getUserInfo);

// router.route('/:username/:lessonid')
//   .get(Lessons.getLessonInfo)
//   .update(UserController.finishedLesson);
router.post('/signin', requireSignin, UserController.signin);

router.post('/signup', UserController.signup);

export default router;
