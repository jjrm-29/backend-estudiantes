import { Router } from 'express';
import { obtenerDetallesVentas, obtenerDetalles_ventas, registrarDetalles_Ventas, eliminardetalle_venta, actualizardetalle_ventaPatch } from '../controllers/detalles_ventas.controller.js';

const router = Router();

router.get('/detallesventas', obtenerDetallesVentas);

// Rutas
router.get('/detallesventas/:id_detalle_venta', obtenerDetalles_ventas);

// Ruta para registrar una nueva detallesventas
router.post('/registrarDetalles_Ventas', registrarDetalles_Ventas);

//Rutas
router.delete('/eliminardetalle_venta/:id_detalle_venta', eliminardetalle_venta);

// Ruta para actualizar una detalle_venta por su ID
router.patch('/actualizardetalle_ventaPatch/:id_detalle_venta', actualizardetalle_ventaPatch);

export default router;