const yargs = require("yargs");
const fs = require("fs");

const argv = yargs
    .command("saludar", "muestra un saludo", {
        nombre: {
            describe: "nombre de la persona a saludar",
            demandOption: true,
            type: "string"
        }
    })
    .help()
    .command("despedir", "muestra una despedida", {
        nombre: {
            describe: "nombre de la persona a despedir",
            demandOption: true,
            type: "string"
        }
    })
    .help()
    .command("sumar", "suma dos numeros", {
        n1: {
            describe: "primer numero",
            demandOption: true,
            type: "number"
        },
        n2: {
            describe: "segundo numero",
            demandOption: true,
            type: "number"
        }
    })
    .help()
    .command("leerJSON", "lee un archivo JSON y muestra su contenido", {
        archivo: {
            describe: "ruta del archivo JSON",
            demandOption: true,
            type: "string"
        }
    })
    .argv;

if (argv._[0] === "saludar") {
    if (!argv.nombre) {
        console.log("Error: Debe ingresar un nombre para saludar.");
    } else {
        console.log("Hola " + argv.nombre + "!");
    }
}

if (argv._[0] === "despedir") {
    console.log("Adios " + argv.nombre + "!");
}

if (argv._[0] === "sumar") {
    console.log("La suma de " + argv.n1 + " + " + argv.n2 + " es: " + (argv.n1 + argv.n2));
}

if (argv._[0] === "leerJSON") {
    fs.readFile(argv.archivo, "utf8", (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            console.log("Contenido del archivo JSON:", jsonData);
        } catch (err) {
            console.error("Error al parsear el archivo JSON:", err);
        }
    });
}