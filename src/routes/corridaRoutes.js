import { Router } from 'express';
import CorridasController from '../controllers/CorridasController';

const router = new Router();

router.get('/', CorridasController.index);
router.get('/:id', CorridasController.show);
router.post('/', CorridasController.store);
router.put('/:id', CorridasController.udpate);
router.delete('/:id', CorridasController.delete);

export default router;
