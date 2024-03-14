import {pool} from '../db.js'

export const getAllProyectos = async (req,res) => {
    const idu = req.params.id;
    try {
        const results = await pool.query('SELECT * FROM proyecto WHERE id_u = ?', [idu]);
        res.json(results[0]);
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
        res.status(500).json({ error: 'Error al obtener proyectos' });
      }
}

export const getProyecto = async (req,res) => {
    const idP = req.params.id;
  try {
    const results = await pool.query('SELECT * FROM proyecto WHERE id_p = ?', [idP]);
    if (results.length === 0) {
      res.status(404).json({ error: 'Proyecto no encontrado' });
    } else {
      res.json(results[0]);
    }
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
}

export const createProyecto = async(req,res) => {
    const { id_u, nom_p, des_p, fecha_i, fecha_f } = req.body;
    const nuevoProyecto = { id_u, nom_p, des_p, fecha_i, fecha_f };

    try {
        const result = await pool.query('INSERT INTO proyecto SET ?', nuevoProyecto);
        res.json({ id_p: result.insertId, ...nuevoProyecto });
    } catch (error) {
        console.error('Error al crear el proyecto:', error);
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
}

export const updateProyecto = async (req, res) => {
    const idP = req.params.id;
    const { id_u, nom_p, des_p, fecha_i, fecha_f } = req.body;
    const proyectoActualizado = { id_u, nom_p, des_p, fecha_i, fecha_f };

    try {
        const result = await pool.query('UPDATE proyecto SET ? WHERE id_p = ?', [proyectoActualizado, idP]);
        if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Proyecto no encontrado' });
        } else {
        res.json({ id_p: idP, ...proyectoActualizado });
        }
    } catch (error) {
        console.error('Error al actualizar el proyecto:', error);
        res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
}

export const deleteProyecto = async (req,res) => {
    const idP = req.params.id;

    try {
        const result = await pool.query('DELETE FROM proyecto WHERE id_p = ?', [idP]);
        if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Proyecto no encontrado' });
        } else {
        res.json({ message: 'Proyecto eliminado exitosamente' });
        }
    } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
}