import Router from 'express';
//Import del controlador de Clientes
import * as ClientCtr from '../controllers/client.controller.js';

const router = Router();

//Rutas de Operaciones de Clientes

router.get('/', ClientCtr.getClients);
router.get('/:email', ClientCtr.getClientByEmail);
router.post('/', ClientCtr.createClient);
router.put('/:id', ClientCtr.updateClient);
router.delete('/:id', ClientCtr.deleteClient);

export default router;