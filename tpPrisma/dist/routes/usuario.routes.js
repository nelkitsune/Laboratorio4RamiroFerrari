"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/usuario.routes.ts
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getUsuarios);
router.get('/:id', usuario_controller_1.getUsuarioById);
router.post('/register', usuario_controller_1.crearUsuario);
router.put('/:id', usuario_controller_1.actualizarUsuario);
router.delete('/:id', usuario_controller_1.eliminarUsuario);
exports.default = router;
