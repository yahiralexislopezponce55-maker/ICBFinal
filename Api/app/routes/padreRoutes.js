'use strict'

const express = require('express');
const padresControllers = require('../controllers/padreControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getPadres', async (req, res) => await padresControllers.findAll(req, res))
.post('/insertPadre', async (req, res) =>  padresControllers.insertPadre(req, res))
.put('/updatePadre', async (req, res) =>  padresControllers.updatePadre(req, res))
.delete('/deletePadre/:id', async (req, res) => padresControllers.deletePadre(req, res));

module.exports = apiRoutes;