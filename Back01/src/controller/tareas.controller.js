import {pool} from '../database'

export const crearTarea = async (req,res) =>{
    try{
        const [id] = req.params.id;
        const [newTarea] = req.body;

    }catch (error){
        console.error('Error: ', error);
        res.status(500).json({ error: 'Ocurrió un error al crear la tarea' });
    }
}

