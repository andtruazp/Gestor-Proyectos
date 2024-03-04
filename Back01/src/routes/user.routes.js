import { Router } from "express";
import { getId, login, makeRegistro, usuarios } from "../controller/user.controller";

const router = Router()

router.post('/registrar', makeRegistro);
router.get('/login', login);
router.get('/id',getId);
router.get('/usuarios', usuarios);

export default router;