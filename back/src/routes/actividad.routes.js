import {Router} from 'express'
import { createAct, deleteAct, updateAct, verActP, verMisAct } from '../controllers/actividades.controller.js'


const router = Router()

router.get('/proyecto/actividad/:id', verActP)
router.get('/actividad/:id', verMisAct)
router.post('/actividad', createAct)
router.put('/actividad/:id',updateAct)
router.delete('/actividad/:id', deleteAct)

export default router