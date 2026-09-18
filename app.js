const express = require('express');
const app = express();
const PORT = 3000;

// Datos de usuarios
const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// Función para filtrar usuarios por especialidad
const getUsersBySpecialty = (specialty) => {
  return usersData.filter(user => user.specialty === specialty);
};

// Función auxiliar para generar el HTML de una página de especialidad
const renderSpecialtyPage = (titulo, specialty) => {
  const users = getUsersBySpecialty(specialty);

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titulo}</title>
    </head>
    <body>
      <h1>${titulo}</h1>
      <p>Número de personas: ${users.length}</p>
      <ul>
        ${users.map(user => `<li>${user.name} - Edad: ${user.age}</li>`).join('')}
      </ul>
      <a href="/">Volver a home</a>
    </body>
    </html>
  `;
};

// Ruta principal con navegación
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Inicio</title>
    </head>
    <body>
      <h1>¡Bienvenido a la página principal!</h1>
      <ul>
        <li><a href="/marketing">Marketing</a></li>
        <li><a href="/developers">Developers</a></li>
        <li><a href="/QAs">QAs</a></li>
        <li><a href="/ventas">Ventas</a></li>
      </ul>
    </body>
    </html>
  `);
});

app.get('/marketing', (req, res) => {
  res.send(renderSpecialtyPage('Marketing', 'marketing'));
});

app.get('/developers', (req, res) => {
  res.send(renderSpecialtyPage('Developers', 'developers'));
});

app.get('/QAs', (req, res) => {
  res.send(renderSpecialtyPage('QAs', 'QAs'));
});

app.get('/ventas', (req, res) => {
  res.send(renderSpecialtyPage('Ventas', 'ventas'));
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('404 - Página no encontrada');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});