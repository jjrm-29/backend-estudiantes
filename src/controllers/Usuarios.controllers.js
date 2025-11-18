import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM usuarios');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una Usuario por su ID
export const obtenerUsuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query('SELECT * FROM usuarios WHERE id_usuario= ?', [req.params.id_usuario])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las usuarios.'
    });
  }
};

// Registrar una nueva Compra
export const registrarUsuario = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Usuarios (usuario, contraseña) VALUES (?, ?)',
      [ usuario, contraseña ]
    );
    res.status(201).json({ id_usuario: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la usuarios.',
      error: error
    });
  }
};

// Eliminar una Usuario por su ID 
export const eliminarUsuario = async (req, res) =>  {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query('DELETE FROM usuarios WHERE id_usuario= ?', [id_usuario]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la usuarios. ID ${id_usuario} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La usuarios con ID ${id_usuario} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la usuarios.',
      error: error
    });
  }
};

// Verificar usuario para login
export const verificarUsuario = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
      return res.status(400).json({
        mensaje: "Debe enviar usuario y contrasena."
      });
    }

    const [result] = await pool.query(
      'SELECT * FROM Usuarios WHERE usuario = ? AND contraseña = ?',
      [usuario, contrasena]
    );

    if (result.length > 0) {
      return res.json(true);   // Usuario correcto
    } else {
      return res.json(false);  // Datos incorrectos
    }

  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error al verificar el usuario.',
      error
    });
  }
};


// Controlador para actualizar parcialmente una usuarios por su ID
export const actualizarusuariosPatch = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE usuarios SET ? WHERE id_usuario = ?',
      [datos, id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `usuarios con ID ${id_usuario} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `usuarios con ID ${id_usuario} actualizada.`
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la usuarios.', error });
  }
};