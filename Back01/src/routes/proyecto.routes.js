import { Router } from "express";
import { addUsuario, crearProyecto, deleteProyecto, deleteUserP, getUsuarios, updateProyecto, userProyecto, verProyectos } from "../controller/proyecto.controller";

const router = Router();

router.get('proyectos/:id',verProyectos);
router.post('proyectos', crearProyecto);
router.put('proyecto/:id', updateProyecto);
router.delete('proyecto/:id',deleteProyecto);
//integrantes
router.get('userp/:user',getUsuarios);
router.post('userp',addUsuario);
router.get('verpeople/:id',userProyecto);
router.delete('userp/:id',deleteUserP);

export default router;