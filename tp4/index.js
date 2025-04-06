import 'dotenv/config';
import { sumar } from './math.js';
import readline from 'readline';
import fs from 'fs';

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

console.log(`DB_HOST: ${dbHost}`);
console.log(`DB_USER: ${dbUser}`);
console.log(`DB_PASS: ${dbPass}`);

const resultado = sumar(5, 3);
console.log(`El resultado de sumar 5 y 3 es: ${resultado}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
    rl.question('¿Cuántos años tienes? ', (edad) => {
        rl.question('¿Cuál es tu correo electrónico? ', (correo) => {

            const datos = `Nombre: ${nombre}\nEdad: ${edad}\nCorreo: ${correo}`;
            fs.writeFile('datos_usuario.txt', datos, (err) => {
                if (err) {
                    console.error('Error al guardar los datos:', err);
                } else {
                    console.log('Datos guardados correctamente en datos_usuario.txt');

                    fs.readFile('datos_usuario.txt', 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error al leer el archivo:', err);
                        } else {
                            console.log('Contenido del archivo:');
                            console.log(data);
                        }
                        rl.close();
                    });
                }
            });
        });
    });
});