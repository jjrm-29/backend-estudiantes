import { Router } from 'express';
import { obtenerDetalles_Ventas, obtenerDetallesventas, registrarDetalles_Ventas, eliminardetalle_venta, actualizardetalle_ventaPatch } from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Rutas para obtener todas las detalles_ventas
router.get('/detallesventas', obtenerDetalles_Ventas);

// Rutas
router.get('/detallesventas/:id_detalle_venta', obtenerDetallesventas);

// Ruta para registrar una nueva detallesventas
router.post('/registrarDetalles_Ventas', registrarDetalles_Ventas);

//Rutas
router.delete('/eliminardetalle_venta/:id_detalle_venta', eliminardetalle_venta);

// Ruta para actualizar una detalle_venta por su ID
router.patch('/actualizardetalle_ventaPatch/:id_detalle_venta', actualizardetalle_ventaPatch);

export default router;