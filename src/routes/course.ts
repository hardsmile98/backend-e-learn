import { Router } from 'express';
import CourseController from '../controllers/course';

const router = Router();
const course = new CourseController();

router.get('/', course.getList);
router.post('/addCourse', course.addCourse);
router.post('/addWord', course.addWord);

export default router;