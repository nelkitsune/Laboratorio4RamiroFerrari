import { prisma } from '../prisma';
import bcrypt from 'bcrypt';

export const getUsuarios = () => prisma.usuario.findMany();

export const getUsuarioById = (id: string) => prisma.usuario.findUnique({ where: { id } });

export const crearUsuario = async (data: { nombre: string; email: string; password: string }) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.usuario.create({
        data: {
            nombre: data.nombre,
            email: data.email,
            password: hashedPassword
        }
    });
};

export const actualizarUsuario = async (
    id: string,
    data: Partial<{ nombre: string; email: string; password: string }>
) => {
    const updateData: any = { ...data };
    if (data.password) {
        updateData.password = await bcrypt.hash(data.password, 10);
    }
    return prisma.usuario.update({ where: { id }, data: updateData });
};

export const eliminarUsuario = (id: string) => prisma.usuario.delete({ where: { id } });
