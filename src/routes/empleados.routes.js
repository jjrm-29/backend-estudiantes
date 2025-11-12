import { Router } from 'express';
import {obtenerEmpleados, obtenerEmpleado,registrarEmpleado, eliminarEmpleado, actualizarEmpleado,} from '../controllers/Empleados.controllers.js';

const router = Router();

// Rutas
router.get ('/empleados', obtenerEmpleados);
// ruta por id
router.get ('/empleado/:id_empleado',obtenerEmpleado);

// Ruta para registrar una nueva Categoría
router.post('/registrarempleado', registrarEmpleado);

router.delete('/eliminarempleado/:id_empleado',eliminarEmpleado);

// Ruta para actualizar una Categoría por su ID
router.patch('/actualizarempleado/:id_empleado', actualizarEmpleado);

export default router;