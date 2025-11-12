import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM productos');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una Producto por su ID
export const obtenerProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query('SELECT * FROM productos WHERE id_producto= ?', [req.params.id_producto])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las Productos.'
    });
  }
};

// Registrar una nueva Productos
export const registrarProducto = async (req, res) => {
  try {
    const {
      nombre_producto,
      descripcion_producto,
      id_categoria,
      precio_unitario,
      stock,
      imagen
    } = req.body;
    const [result] = await pool.query(
      `INSERT INTO productos 
            (nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock, imagen)
            VALUES (?, ?, ?, ?, ?, ?)`,
      [
        nombre_producto,
        descripcion_producto,
        id_categoria,
        precio_unitario,
        stock,
        imagen
      ]
    );
    res.status(201).json({
      mensaje: 'Producto registrado correctamente.',
      id_producto: result.insertId
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la Producto.',
      error: error
    });
  }
};

// Eliminar una Productos por su ID 
export const eliminarProducto = async (req, res) =>  {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query('DELETE FROM productos WHERE id_producto= ?', [id_producto]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la Producto. ID ${id_producto} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La Productos con ID ${id_producto} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la Producto.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una Productos por su ID
export const actualizarProductos = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE productos SET ? WHERE id_producto = ?',
      [datos, id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `productos con ID ${id_producto} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `productos con ID ${id_producto} actualizada.`
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la productos.', error });
  }
};