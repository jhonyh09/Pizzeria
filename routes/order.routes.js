import Router from 'express';
//Import del controlador de Ordenes
import * as OrderCtr from '../controllers/order.controller.js';

const router = Router();

//Rutas de Operaciones de Ordenes

router.get('/', OrderCtr.getOrders);
router.get('/:id', OrderCtr.getOrdersById);
router.post('/', OrderCtr.createOrder);
router.put('/:id', OrderCtr.updateOrder);
router.delete('/:id', OrderCtr.deleteOrder);

export default router;