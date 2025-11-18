import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario, verificarUsuario, actualizarusuariosPatch } from '../controllers/Usuarios.controllers.js';

const router = Router();

router.get('/usuarios', obtenerUsuarios);

// Rutas
router.get('/usuarios/:id_usuario', obtenerUsuario);

// Ruta para registrar una nueva Empleado
router.post('/registrarUsuario', registrarUsuario);

//Rutas
router.delete('/eliminarUsuario/:id_usuario', eliminarUsuario);

router.post('/verificarUsuario', verificarUsuario);

// Ruta para actualizar una Usuario por su ID
router.patch('/actualizarusuariosPatch/:id_usuario', actualizarusuariosPatch);

export default router;