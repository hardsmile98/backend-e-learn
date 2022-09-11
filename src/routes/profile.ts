import { Router } from 'express';
import ProfileController from '../controllers/profile';

const router = Router();
const profile = new ProfileController();

router.get('/me', profile.me);
router.get('/info', profile.getInfo);

export default router;