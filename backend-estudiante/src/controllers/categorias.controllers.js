import { pool } from '../../db_connection.js';


// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM categorias');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtner una categoria poe su ID 
export const obtenerCategoria = async (req, res) => {
  try {
    const id_categoria = req.params.id_categoria;
    const [result] = await pool.query('SELECT * FROM categorias WHERE id_categoria = ?', [id_categoria])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: 'Error al leer los datos. ID ${id_categoria} no encontrada.'
      })
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};


  // Eliminar una categoría por su ID
export const eliminarCategoria = async (req, res) => {
  try {
    const id_categoria = req.params.id_categoria;
    const [result] = await pool.query('DELETE FROM categorias WHERE id_categoria = ?', [id_categoria]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        mensaje: 'Error al eliminar la categoria. El ID ${id_categoria} no fue encontrada'
       });
      }

  // Respuestas sin contenido para indicar exito
   res.status(204).sed();
    }catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar una categoría.',
        error: error
      });
    }
  }


