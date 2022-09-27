import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = new Router();

router.post('/tokens/', TokenController.store);

export default router;
