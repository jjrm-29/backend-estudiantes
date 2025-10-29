import { Router } from 'express';
import { obtenerVentas, obtenerventa, registrarVenta, eliminarVenta, actualizarventasPatch } from '../controllers/ventas.controller.js';

const router = Router();

router.get('/ventas', obtenerVentas);

// Rutas
router.get('/ventas/:id_venta', obtenerventa);

// Ruta para registrar una nueva venta
router.post('/registrarVenta', registrarVenta);

//Rutas
router.delete('/eliminarVenta/:id_venta', eliminarVenta);

// Ruta para actualizar una Venta por su ID
router.patch('/actualizarventasPatch/:id_venta', actualizarventasPatch);

export default router;