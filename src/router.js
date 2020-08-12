import { Router } from 'express';
import * as Lessons from './controllers/lesson_controller';
import * as Users from './controllers/user_controller';
import * as Notes from './controllers/note_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'initial route' });
});

/// routes: 

export default router;