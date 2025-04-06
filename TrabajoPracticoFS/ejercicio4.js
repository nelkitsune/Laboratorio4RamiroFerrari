const fs = require("fs");
const argv = require("yargs").options({
    file: {
        alias: "f",
        desc: "Nombre del archivo",
        demandOption: true,
        type: "string",
    },
    word: {
        alias: "w",
        desc: "Palabra a buscar",
        demandOption: true,
        type: "string",
    },
}).argv;

try {
    const data = fs.readFileSync(argv.file, "utf-8");
    const words = data.split(/\s+/);
    const wordCount = words.filter((w) => w === argv.word).length;
    console.log(`La palabra "${argv.word}" aparece ${wordCount} veces en el archivo.`);
} catch (err) {
    console.error(`Error al leer el archivo: ${err.message}`);
}