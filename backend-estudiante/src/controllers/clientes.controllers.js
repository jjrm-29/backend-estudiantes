// Obtener todas las clientes
export const obtenerClientes = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM clientes');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

  // Eliminar una clientes por su ID
export const eliminarClientes = async (req, res) => {
  try {
    const id_categoria = req.params.id_cliente;
    const [result] = await pool.query('DELETE FROM clientes WHERE id_cliente = ?', [id_categoria]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        mensaje: 'Error al eliminar la clientes. El ID ${id_cliente} no fue encontrada'
       });
      }

  // Respuestas sin contenido para indicar exito
   res.status(204).sed();
    }catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al eliminar una cliente.',
        error: error
      });
    }
  }