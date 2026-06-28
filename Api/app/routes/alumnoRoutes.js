'use strict'

const express = require('express');
const alumnosControllers = require('../controllers/alumnoControllers');

const apiRoutes = express.Router();

apiRoutes.get('/getAlumnos', async (req, res) => await alumnosControllers.findAll(req, res));

apiRoutes.post('/insertAlumno', async (req, res) =>  alumnosControllers.insertAlumno(req, res));

apiRoutes.put('/updateAlumno', async (req, res) => alumnosControllers.updateAlumno(req, res));

apiRoutes.delete('/deleteAlumno/:id', async (req, res) =>   alumnosControllers.deleteAlumno(req, res));

module.exports = apiRoutes;