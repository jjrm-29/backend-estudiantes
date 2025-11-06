import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarCompra, eliminarProducto, actualizarProductos } from '../controllers/productos.controllers.js';

const router = Router();

router.get('/productos', obtenerProductos);


// Rutas
router.get('/productos/:id_producto', obtenerProducto);

// Ruta para registrar una nueva Empleado
router.post('/registrarCompra', registrarCompra);

//Rutas
router.delete('/eliminarProductos/:id_producto', eliminarProducto);

// Ruta para actualizar una Producto por su ID
router.put('/actualizarProductos/:id_producto', actualizarProductos);


export default router;