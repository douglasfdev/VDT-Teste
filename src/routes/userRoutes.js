import { Router } from 'express';
import CorridasController from '../controllers/CorridasController';
import UserController from '../controllers/UserController';
import ReserveController from '../controllers/ReserveController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, UserController.index);
router.get('/:id', loginRequired, UserController.show);
router.get('/corrida/', loginRequired, CorridasController.index);
router.get('/corrida/:id', loginRequired, CorridasController.show);
router.get('/corrida/:id/reserve/', loginRequired, ReserveController.index);

router.post('/corrida/:id/reserve/', loginRequired, ReserveController.store);
router.post('/corrida/', loginRequired, CorridasController.store);
router.post('/', loginRequired, UserController.store);

router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
