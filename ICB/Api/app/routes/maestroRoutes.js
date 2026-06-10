'use strict'

const express = require('express');
const maestroControllers = require('../controllers/maestroControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getMaestros', async (req, res) => await maestroControllers.findAll(req, res))
.post('/insertMaestro', async (req, res) => await maestroControllers.insertMaestro(req, res))
.put('/updateMaestro', async (req, res) => await maestroControllers.updateMaestro(req, res))
.delete('/deleteMaestro/:id_maestro', async (req, res) => await maestroControllers.deleteMaestro(req, res));

module.exports = apiRoutes;