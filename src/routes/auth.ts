import { Router } from 'express';
import AuthController from '../controllers/auth';

const router = Router();
const auth = new AuthController();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);

export default router;
