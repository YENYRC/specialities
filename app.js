const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let usuarios = [
    { id: 1, nombre: 'Ryu' },
    { id: 2, nombre: 'Ken' },
    { id: 3, nombre: 'Guile' },
];

// READ
app.get('/', (req, res) => {
    res.send(`
        <h1>Lista de usuarios</h1>
        <ul>
            ${usuarios.map((usuario) => <li>ID: ${usuario.id} | Nombre: ${usuario.nombre} <a href="/form-action/${usuario.id}">Editar</a></li>).join('')}
        </ul>
        <a href="/form-action">Agregar usuario</a>
        <form action="/usuarios" method="post">
            <input type="text" id="nombre" name="nombre" required>
            <button type="submit">Agregar usuario</button>
        </form>
    `);
});

// CREATE
app.post('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto 3000');
});