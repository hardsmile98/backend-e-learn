import { Router } from 'express';
import CourseController from '../controllers/course';

const router = Router();
const course = new CourseController();

router.get('/', course.getList);
router.post('/addCourse', course.addCourse);
router.post('/addWord', course.addWord);
router.get('/learn', course.getWords);
router.post('/learn', course.finishLearn);

export default router;