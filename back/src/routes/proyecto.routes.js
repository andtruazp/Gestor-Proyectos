import {Router} from 'express'
import { getAllProyectos, getProyecto, createProyecto, updateProyecto, deleteProyecto } from '../controllers/proyecto.controller.js'

const router = Router()

router.get('/proyecto/all/:id', getAllProyectos)
router.get('/proyecto/:id', getProyecto)
router.post('/proyecto',createProyecto)
router.put('/proyecto/:id', updateProyecto)
router.delete('/proyecto/:id', deleteProyecto)

export default router