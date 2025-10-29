import { Router } from 'express';
import { obtenerCompras, obtenercompra, registrarCompra, eliminarCompra, actualizarCompraPatch } from '../controllers/compras.controllers.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Rutas
router.get('/compras/:id_compra', obtenercompra);

// Ruta para registrar una nueva Compras
router.post('/registrarCompra', registrarCompra);

//Rutas
router.delete('/eliminarCompra/:id_compra', eliminarCompra);

// Ruta para actualizar una compra por su ID
router.patch('/actualizarCompraPatch/:id_compra', actualizarCompraPatch);

export default router;