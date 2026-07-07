'use strict'

const express = require('express');
const alumnosControllers = require('../controllers/alumnoControllers');

const apiRoutes = express.Router();

apiRoutes.get('/getAlumnos', async (req, res) => await alumnosControllers.findAll(req, res));
apiRoutes.post('/insertAlumno', async (req, res) => await alumnosControllers.insertAlumno(req, res));
apiRoutes.put('/updateAlumno', async (req, res) => await alumnosControllers.updateAlumno(req, res));
apiRoutes.delete('/deleteAlumno/:id_alumno', async (req, res) => await alumnosControllers.deleteAlumno(req, res));

module.exports = apiRoutes;