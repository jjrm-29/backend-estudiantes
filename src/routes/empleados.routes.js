import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado, actualizarEmpleado } from '../controllers/Empleados.controllers.js';

const router = Router();

//Rutas para obtener empleados
router.get('/empleados', obtenerEmpleados);

// Rutas para obtener un empleado por su ID
router.get('/empleados/:id_empleado', obtenerEmpleado);

// Ruta para registrar una nueva Empleado
router.post('/registrarEmpleado', registrarEmpleado);

//Rutas
router.delete('/eliminarEmpleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar un Empleado
router.put('/actualizarEmpleado/:id_empleado', actualizarEmpleado);

export default router;