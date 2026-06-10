'use strict'

const express = require('express');
const cors = require('cors');
const app = express();

// Permitir CORS desde cualquier origen
app.use(cors({ origin: '*' }));

// Middlewares para recibir JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 🔹 Importar rutas de Seccion
const seccionRoutes = require('./routes/seccionRoutes');

const gradoRoutes = require('./routes/gradoRoutes');

const claseRoutes = require('./routes/claseRoutes');

const maestroRoutes = require('./routes/maestroRoutes');

const alumnoRoutes = require('./routes/alumnoRoutes');

const padreRoutes  = require('./routes/padreRoutes');

const ticketRoutes = require('./routes/ticketRoutes');
// 🔹 Crear rutas para Seccion
app.use('/api/seccion', seccionRoutes);

app.use('/api/grado', gradoRoutes);

app.use('/api/clase', claseRoutes);

app.use('/api/maestro', maestroRoutes);

app.use('/api/alumno', alumnoRoutes);

app.use('/api/padre', padreRoutes);

app.use('/api/ticket', ticketRoutes);
module.exports = app;