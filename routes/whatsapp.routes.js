import Router from 'express';
//importando el controlador de Whatsapp
import * as WhatsappCtr from '../controllers/whatsapp.controller.js';

const router = Router();

//Rutas

router.get('/', WhatsappCtr.enviarSolicitudWS);


export default router;
