import { Router } from 'express';
import {obtenerClientes, obtenerCliente,registrarCliente, eliminarCliente} from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get ('/clientes', obtenerClientes);
// ruta por id
router.get ('/cliente/:id_cliente',obtenerCliente); 

// Ruta para registrar una nueva Categoría
router.post('/registrarcliente', registrarCliente);

router.delete('/eliminarcliente/:id_cliente',eliminarCliente);

export default router;