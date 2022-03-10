import { Router } from "express";
const router = Router();
import * as user from './UserGit.controllers'
router.get('/Usuarios',user.getUsers);

router.get('/Usuarios/:id',user.getUser);

router.post('/Usuarios/',user.createUser);

router.delete('/Usuarios/:id',user.deleteUser);

router.put('/Usuarios/:id',user.updateUser);

export default router