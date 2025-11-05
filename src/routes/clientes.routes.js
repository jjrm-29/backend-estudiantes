import { Router } from 'express';
import {obtenerClientes, obtenerCliente,registrarCliente, actualizarCliente, eliminarCliente} from '../controllers/clientes.controllers.js';

const router = Router();

// Rutas
router.get ('/clientes', obtenerClientes);
// ruta por id
router.get ('/cliente/:id_cliente',obtenerCliente); 

// Ruta para registrar una nueva Categoría
router.post('/registrarcliente', registrarCliente);

// Actualizar un cliente
router.put('/actualizarcliente/:id_cliente', actualizarCliente);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarCliente/:id_cliente', eliminarCliente);

export default router;