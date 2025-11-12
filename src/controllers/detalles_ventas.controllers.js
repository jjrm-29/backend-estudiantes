import { pool } from '../../db_connection.js';

// Obtener todas las detalles_ventas
export const obtenerDetalles_Ventas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detalles_ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una detalle_venta por su ID
export const obtenerDetallesventas = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalle_venta= ?', [req.params.id_detalle_venta])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las detalles_ventas.'
    });
  }
};

// Registrar una nueva Detalles_Ventas
export const registrarDetalles_Ventas = async (req, res) => {
  try {
    const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Detalles_Ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
      [ id_venta, id_producto, cantidad, precio_unitario ]
    );
    res.status(201).json({ id_detalle_venta: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la detalle_venta.',
      error: error
    });
  }
};

// Eliminar una detalle_venta por su ID 
export const eliminardetalle_venta = async (req, res) =>  {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query('DELETE FROM detalles_ventas WHERE id_detalle_venta= ?', [id_detalle_venta]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la detalle_venta. ID ${id_detalle_venta} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La detalle_venta con ID ${id_detalle_venta} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la detalle_venta.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una detalleCompra por su ID
export const actualizardetalle_ventaPatch = async (req, res) => {
  try {
    const { id_detalle_venta } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE detalles_ventas SET ? WHERE id_detalle_venta = ?',
      [datos, id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `detalle_venta con ID ${id_detalle_venta} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `detalle_venta con ID ${id_detalle_venta} actualizada.`
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la detalle_venta.', error });
  }
};