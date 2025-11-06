import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Empleados');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una Empleados por su ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id_empleado;
    const [result] = await pool.query('SELECT * FROM Empleados WHERE id_compra= ?', [req.params.id_empleado])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las Empleados.'
    });
  }
};

// Registrar una nueva Compra
export const registrarEmpleado = async (req, res) => {
  try {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion ]
    );
    res.status(201).json({ id_empleado: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la Empleados.',
      error: error
    });
  }
};

// Eliminar una Empleado  por su ID 
export const eliminarEmpleado = async (req, res) =>  {
  try {
    const id_empleado = req.params.id_empleado;
    const [result] = await pool.query('DELETE FROM Empleados WHERE id_empleado= ?', [id_empleado]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la Empleados. ID ${id_empleado} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La Empleados con ID ${id_empleado} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la Empleados.',
      error: error
    });
  }
};

// Actiualizar una Empleado
export const actualizarEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id_empleado;

    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion } = req.body; 
    const [result] = await pool.query(
      'UPDATE Empleados SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, celular = ?, cargo = ?, fecha_contratacion = ? WHERE id_empleado = ?',
      [ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion, id_empleado ]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar la Empleados. ID ${id_empleado} no fue encontrado.`
      });
    }
    res.status(200).json({
      mensaje: `La Empleados con ID ${id_empleado} fue actualizada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar la Empleados.',
      error: error
    });
  } 
};