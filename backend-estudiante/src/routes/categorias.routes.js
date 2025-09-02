import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categoria.controllers.js';

const router = Router();

//Rutas para obtener categorías
router.get('/categorias', obtenerCategorias);

// Rutas
export default router;