import { Router } from 'express';
import CourseController from '../controllers/course';

const router = Router();
const course = new CourseController();

router.get('/', course.getList);

export default router;