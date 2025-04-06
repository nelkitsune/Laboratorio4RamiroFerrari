const filePath = "contactos.json";
const fs = require("fs");

function readContacts() {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
}

function addContact(nombre, telefono, email) {
    let contactos = readContacts();
    if (!Array.isArray(contactos)) {
        console.error("Error: los contactos no son un array.");
        return;
    }
    const nuevoContacto = { nombre, telefono, email };
    contactos.push(nuevoContacto);
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2));
    console.log(`Contacto "${nombre}" agregado correctamente.`);
}

function deleteContact(nombre) {
    let contactos = readContacts();

    if (!Array.isArray(contactos)) {
        console.error("Error: los contactos no son un array.");
        return;
    }

    const contactosFiltrados = contactos.filter(
        (contacto) =>
            contacto.nombre.trim().toLowerCase() !== nombre.trim().toLowerCase()
    );

    if (contactos.length === contactosFiltrados.length) {
        console.log(`No se encontró el contacto con nombre "${nombre}".`);
        return;
    }

    fs.writeFileSync(filePath, JSON.stringify(contactosFiltrados, null, 2));

    console.log(`Contacto "${nombre}" eliminado correctamente.`);
}

console.log(readContacts());
addContact("RamiroFerrari", "12314255534", "rami@example.com");
console.log(readContacts());
deleteContact("Juan Pérez");
console.log(readContacts());