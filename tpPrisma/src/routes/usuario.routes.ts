// src/routes/usuario.routes.ts
import { Router } from 'express';
import { getUsuarios, getUsuarioById, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuario.controller';

const router = Router();

router.get('/', getUsuarios);

router.post('/register', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
