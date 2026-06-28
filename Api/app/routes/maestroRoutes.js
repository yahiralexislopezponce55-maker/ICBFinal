'use strict'

const express = require('express');
const maestroControllers = require('../controllers/maestroControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getMaestros', async (req, res) => await maestroControllers.findAll(req, res))
.post('/insertMaestro', async (req, res) =>  maestroControllers.insertMaestro(req, res))
.put('/updateMaestro', async (req, res) =>  maestroControllers.updateMaestro(req, res))
.delete('/deleteMaestro/:id', async (req, res) => maestroControllers.deleteMaestro(req, res));

module.exports = apiRoutes;