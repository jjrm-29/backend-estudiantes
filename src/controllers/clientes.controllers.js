import { pool } from '../../db_connection.js';

// Obtener todos los clientes

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

// Obtener un cliente por su ID
export const obtenerCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje:'Error al leer los datos. ID ${id_cliente} no encontrado.'
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las clientes.'
        });
    }
};

// Registrar un nuevo cliente
export const registrarCliente = async (req, res) => {
    try {
        const {primer_nombre , segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula } = req.body;
        const [result] = await pool.query(
            'INSERT INTO clientes (primer_nombre , segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula) VALUES (?, ?, ?, ?, ?, ?, ?)', // los signos de interogacion tienen que ser la misma cantidad de los parametros
            [primer_nombre , segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula]
        );
        res.status(201).json({ id_cliente: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el cliente.',
            error: error
        });
    }
};

// Actualizar un cliente
export const actualizarCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;
        const {primer_nombre , segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula } = req.body;
        const [result] = await pool.query(
            'UPDATE clientes SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, celular = ?, direccion = ?, cedula = ? WHERE id_cliente = ?',
            [primer_nombre , segundo_nombre, primer_apellido, segundo_apellido, celular, direccion, cedula, id_cliente]
        );
        if (result.affectedRows === 0) {
            return  res.status(404).json({
                mensaje: 'Error al actualizar la cliente. el id ${id_cliente} No fue encontrada.'
            });
        }
        res.json({ mensaje: 'Cliente actualizado correctamente.' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al actualizar la cliente.',
            error: error
        });
    }
};

// Eliminar un cliente

export const eliminarCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente;   
        const [result] = await pool.query('DELETE FROM clientes WHERE id_cliente = ?', [id_cliente]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Error al eliminar el cliente. ID ${id_cliente} no encontrado.'
            });
        }
        res.json({ mensaje: 'Cliente eliminado correctamente.' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el cliente.',
            error: error
        });
    }
};
