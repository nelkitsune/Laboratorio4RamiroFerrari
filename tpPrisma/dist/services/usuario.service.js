"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const prisma_1 = require("../prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsuarios = () => prisma_1.prisma.usuario.findMany();
exports.getUsuarios = getUsuarios;
const getUsuarioById = (id) => prisma_1.prisma.usuario.findUnique({ where: { id } });
exports.getUsuarioById = getUsuarioById;
const crearUsuario = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(data.password, 10);
    return prisma_1.prisma.usuario.create({
        data: {
            nombre: data.nombre,
            email: data.email,
            password: hashedPassword
        }
    });
});
exports.crearUsuario = crearUsuario;
const actualizarUsuario = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = Object.assign({}, data);
    if (data.password) {
        updateData.password = yield bcrypt_1.default.hash(data.password, 10);
    }
    return prisma_1.prisma.usuario.update({ where: { id }, data: updateData });
});
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (id) => prisma_1.prisma.usuario.delete({ where: { id } });
exports.eliminarUsuario = eliminarUsuario;
