const fs = require("fs");
const contenido = "Nombre:Ramiro\nEdad:23\nCarrera:Programador\n";
fs.writeFile('datos.txt', contenido, (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

fs.readFile("datos.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
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

const contenidoAdicional = "Fecha de Modificacion: " + getFormattedDateTime();

fs.appendFile("datos.txt", contenidoAdicional, (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

fs.rename('datos.txt', 'informacion.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});

setTimeout(() => {
    fs.unlink('informacion.txt', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}, 10000);

