import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerDetallesCompras = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detalles_compras');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una categoría por su ID
export const obtenerDetallesCompra = async (req, res) => {
  try {
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query('SELECT * FROM detalles_compras WHERE id_detalle_compra= ?', [req.params.id_detalle_compra])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las detalles_compras.'
    });
  }
};

// Registrar una nueva detallescompras
export const registrarDetalles_compra = async (req, res) => {
  try {
    const { id_compra, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Detalles_Compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
      [ id_compra, id_producto, cantidad, precio_unitario ]
    );
    res.status(201).json({ id_detalle_compra: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la detalles_compras.',
      error: error
    });
  }
};

// Eliminar una categoria por su ID 
export const eliminarDetalles_compras = async (req, res) =>  {
  try {
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query('DELETE FROM detalles_compras WHERE id_detalle_compra= ?', [id_detalle_compra]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la id_detalle_compra. ID ${id_detalle_compra} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La detalle_compra con ID ${id_detalle_compra} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la detalle_compra.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una detalleCompra por su ID
export const actualizarDetalles_compraPatch = async (req, res) => {
  try {
    const { id_detalle_compra } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE detalles_compras SET ? WHERE id_detalle_compra = ?',
      [datos, id_detalle_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Detalles_compras con ID ${id_detalle_compra} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `Detalles_compra con ID ${id_detalle_compra} actualizada.`
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la Detalles_compra.', error });
  }
};
