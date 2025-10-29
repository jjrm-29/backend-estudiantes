import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado, actualizarEmpleadosPatch } from '../controllers/empleados.controllers.js';

const router = Router();

router.get('/empleados', obtenerEmpleados);


// Rutas
router.get('/empleados/:id_empleado', obtenerEmpleado);

// Ruta para registrar una nueva Empleado
router.post('/registrarEmpleado', registrarEmpleado);

//Rutas
router.delete('/eliminarEmpleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar una Empleados por su ID
router.patch('/actualizarEmpleadosPatch/:id_empleado', actualizarEmpleadosPatch);


export default router;