import { Router } from 'express';
import * as Lessons from './controllers/lesson_controller';
import * as Users from './controllers/user_controller';
// import * as Notes from './controllers/note_controller';

const router = Router();

/// routes: /:username, /:username/profile, /:username/:lessonid, /
// /:username - a page once the user signs in to their account that displays a basic page with lessons and other links.
// /:username/profile - a page showing the progress and account info of a user. Shows badges and username, etc.
// /:username/:lessonid - a page for each specific lesson module with every page of the lesson at the same route (need :username/ to force authentication.)
// / - home page, not signed into any user account.

router.route('/')
  .get(Users.loadHomepagewithoutUser);
router.route('/:username')
  .get(Users.loadHomepageWithUser);

router.route('/:username/profile')
  .get(Users.getUserInfo);

router.route('/:username/:lessonid')
  .get(Lessons.getLessonInfo)
  .update(Users.finishedLesson);

/*
lessonid:
  page1:
    someinfo:
  page2:
    moreinfo:

/*
username:
    lesson1:
    lesson2:
    lesson...:
*
*/

export default router;
