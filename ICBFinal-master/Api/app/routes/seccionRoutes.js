'use strict'

const express = require('express');
const seccionControllers = require('../controllers/seccionControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getSeccion', async (req, res) => await seccionControllers.findAll(req, res))
.post('/insertSeccion', async (req, res) => await seccionControllers.insertSeccion(req, res))
.put('/updateSeccion', async (req, res) => await seccionControllers.updateSeccion(req, res))
.delete('/deleteSeccion/:id_seccion', async (req, res) => await seccionControllers.deleteSeccion(req, res));

module.exports = apiRoutes;