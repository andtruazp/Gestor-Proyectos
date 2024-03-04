import {pool} from '../database'

export const verProyectos = async (req, res) => {
    try {
        const[rows]=await pool.query('SELECT p.id_p, p.nom_p, p.des_p, p.fecha_i, p.fecha_f FROM integrantes i JOIN proyecto p ON i.id_p = p.id_p WHERE i.id_us = ?',[req.params.id])
        res.json(rows[0])
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los proyectos' });
      }
}
//revisar
export const crearProyecto = async (req, res) => {
    try {
        const newProyecto = req.body
        const[result]= await pool.query('INSERT INTO pryecto SET ?', [newProyecto])
        res.json('insertado')
      } catch (error) {
        console.error('Error al obtener datos del proyecto:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los datos del proyecto' });
      }
}

export const updateProyecto = async (req,res) => {
    try {
        const { id } = req.params; 
        const {lider,nom_p,des_p,fecha_i,fecha_f } = req.body
        const [id_l] = await pool.query('SELECT lider FROM proyecto WHERE id_p =?',[id]);
        if(lider != id_l) {
          console.error('El usuario no tiene permisos:', error);
          res.status(500).json({ error: 'Ocurrió un error' });
        }
        const [result] = await pool.execute(
          'UPDATE proyecto SET nom_p = ?, des_p = ?, fecha_i = ?, fecha_f=? WHERE id_p = ?',
          [nom_p,des_p,fecha_i,fecha_f, id]
        )
        const [rows]= await pool.query('SELECT * FROM proyecto WHERE id_p = ?',[id])
        res.json(rows)
      } catch (error) {
        console.error('Error al obtener datos del proyecto:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los datos del proyecto' });
      }
}

export const deleteProyecto =async (req,res) => {
    try {
        const [result] = await pool.execute(
          'DELETE FROM proyecto WHERE id_p = ?',[req.params.id]
        )
        res.json('Proyecto Eliminado')
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Ocurrió un error' });
      }
}

//AGREGAR INTEGRANTES AL PROYECTO
export const getUsuarios = async (req,res) => {
  try{
    const [usuario] = req.params;
    const[rows]=await pool.query('SELECT id_us, nombre, usuario FROM usuario WHERE nombre = ? OR usuario = ?',[usuario,usuario])
        res.json(rows[0])
  } catch (error){
    console.error('Error: ', error);
    res.status(500).json({error: 'Ocurrio un error'});
  }
}

export const addUsuario = async (req,res) => {
  try{
    const[rows]=await pool.query('INSERT INTO integrantes SET ?',[req.body])
        res.json('Insertado')
  } catch (error){
    console.error('Error: ', error);
    res.status(500).json({error: 'Ocurrio un error'}); 
  }
}
//Mostrar los usuarios asignados a un proyecto
export const userProyecto = async (req,res) => {
  try{
    const[rows]=await pool.query('SELECT u.id_us, u.nombre, u.usuario FROM integrantes i JOIN usuario u ON i.id_u = u.id_us WHERE i.id_p = ?',[req.params.id]);
    es.json(rows[0]);
  } catch (error){
    console.error('Error: ', error);
    res.status(500).json({error: 'Ocurrio un error'}); 
  }
}

export const deleteUserP = async (req,res) => {
  try{
    const [result] = await pool.execute(
      'DELETE FROM integrantes WHERE id_i = ?',[req.params.id]
    )
    res.json('Proyecto Eliminado')
  }catch (error){
    console.error('Error: ', error);
    res.status(500).json({error: 'Ocurrio un error'}); 
  }
  
}