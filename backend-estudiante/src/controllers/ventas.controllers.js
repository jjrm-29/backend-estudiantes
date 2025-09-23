 // Obtener todas las ventas
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

// Eliminar una venta por su ID
export const eliminarventas = async (req, res) => {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        mensaje: 'Error al eliminar la venta. El ID ${id_venta} no fue encontrada'
       });
      }

  // Respuestas sin contenido para indicar exito
   res.status(204).sed();
    }catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar una venta.',
        error: error
      });
    }
  }