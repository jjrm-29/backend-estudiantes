import { Router } from 'express';
import {  eliminarventa} from '../controllers/categorias.controllers.js';

const router = Router();
// Ruta para eliminar una categoria por su ID
router.delete('/eliminarventas/:ID_categoria', eliminarventa)

// Rutas
export default router;