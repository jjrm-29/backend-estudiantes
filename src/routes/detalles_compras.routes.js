import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetallesCompra, registrarDetalles_compra, eliminarDetalles_compras, actualizarDetalles_compraPatch } from '../controllers/detalles_compras.controller.js';

const router = Router();

router.get('/detallescompras', obtenerDetallesCompras);


// Rutas
router.get('/detallescompras/:id_detalle_compra', obtenerDetallesCompra);

// Ruta para registrar una nueva oDetallesCompras
router.post('/registrarDetalles_compra', registrarDetalles_compra);

//Rutas
router.delete('/eliminarDetalles_compras/:id_detalle_compra', eliminarDetalles_compras);

// Ruta para actualizar una Detalles_compra por su ID
router.patch('/actualizarDetalles_compraPatch/:id_detalle_compra', actualizarDetalles_compraPatch);

export default router;