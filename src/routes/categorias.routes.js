import { Router } from 'express';
import { obtenerCategorias, registrarCategoria, obtenerCategoria, eliminarCategoria } from '../controllers/categorias.controllers.js';

const router = Router();

//Rutas para obtener categorías
router.get('/categorias', obtenerCategorias);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);

// Rutas para obtener todas las categorias
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para eliminar una categoria por su ID
router.delete('/eliminarcategorias/:ID_categoria', eliminarCategoria)

// Rutas
export default router;
