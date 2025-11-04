import { Router } from 'express';
import { obtenerCategorias, registrarCategoria, obtenerCategoria, actualizarCategoria , eliminarCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

//Rutas para obtener categorías
router.get('/categorias', obtenerCategorias);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);

// Rutas para obtener todas las categorias
router.get('/categoria/:id_categoria', obtenerCategoria);

// Actualizar una categoria existente
router.put('/actualizarcategoria/:id_categoria', actualizarCategoria);

// Eliminar una categoría
router.delete('/eliminarCategoria/:id_categoria', eliminarCategoria);

// Rutas
export default router;
