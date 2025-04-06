const fs = require("fs");

function getFormattedDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `[${year}-${month}-${day} ${hours}:${minutes}:${seconds}]`;
}

function escribirEnTexto(texto) {
    const dateTime = getFormattedDateTime();
    fs.appendFile("ejercicio1.txt", `${dateTime} - ${texto}\n`, (err) => {
        if (err) {
            console.log("Error al escribir en el archivo");
        } else {
            console.log("Se escribió correctamente en el archivo");
        }
    });
}

escribirEnTexto("inicio de programa");
escribirEnTexto("ejecutando tarea");
setTimeout(() => {
    escribirEnTexto("Tarea terminada");
}, 5000);