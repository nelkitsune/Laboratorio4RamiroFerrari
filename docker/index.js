require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');

const app = express();
app.use(bodyParser.json());

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@localhost:27017/?authSource=admin`;

mongoose.connect(uri)
    .then(() => console.log(' Conectado a MongoDB'))
    .catch(err => console.error(' Error al conectar a MongoDB:', err));


app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});


app.post('/usuarios', async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        const guardado = await nuevoUsuario.save();
        res.json(guardado);
    } catch (err) {
        res.status(500).json({ error: 'Error al guardar usuario' });
    }
});

app.listen(3000, () => {
    console.log('🚀 Servidor corriendo en http://localhost:3000');
});

