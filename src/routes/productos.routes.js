import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarCompra, eliminarProducto, actualizarProductosPatch } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', obtenerProductos);


// Rutas
router.get('/productos/:id_producto', obtenerProducto);

// Ruta para registrar una nueva Empleado
router.post('/registrarCompra', registrarCompra);

//Rutas
router.delete('/eliminarProducto/:id_producto', eliminarProducto);

// Ruta para actualizar una Producto por su ID
router.patch('/actualizarProductosPatch/:id_producto', actualizarProductosPatch);


export default router;