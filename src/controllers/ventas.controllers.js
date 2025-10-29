import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerVentas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};


// Obtener una Vnetas por su ID
export const obtenerventa = async (req, res) => {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query('SELECT * FROM ventas WHERE id_venta= ?', [req.params.id_venta])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las Ventas.'
    });
  }
};

// Registrar una nueva Ventas
export const registrarVenta = async (req, res) => {
  try {
    const { id_cliente, id_empleado, fecha_venta, total_venta } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Ventas (id_cliente, id_empleado, fecha_venta, total_venta) VALUES (?, ?, ?, ?)',
      [ id_cliente, id_empleado, fecha_venta, total_venta ]
    );
    res.status(201).json({ id_venta: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la Venta.',
      error: error
    });
  }
};

// Eliminar una Usuario por su ID 
export const eliminarVenta = async (req, res) =>  {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query('DELETE FROM ventas WHERE id_venta= ?', [id_venta]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la usuarios. ID ${id_venta} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La Venta con ID ${id_venta} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la Venta.',
      error: error
    });
  }
};


// Controlador para actualizar parcialmente una ventas por su ID
export const actualizarventasPatch = async (req, res) => {
  try {
    const { id_venta } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE ventas SET ? WHERE id_venta = ?',
      [datos, id_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `ventas con ID ${id_venta} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `ventas con ID ${id_venta} actualizada.`
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la ventas.', error });
  }
};