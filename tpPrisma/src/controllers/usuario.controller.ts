import { Request, Response } from 'express';
import * as UsuarioService from '../services/usuario.service';

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await UsuarioService.getUsuarios();
        res.json(usuarios);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getUsuarioById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.getUsuarioById(id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const nuevoUsuario = await UsuarioService.crearUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioService.actualizarUsuario(id, req.body);
        res.json(usuario);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await UsuarioService.eliminarUsuario(id);
        res.status(204).send();
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
