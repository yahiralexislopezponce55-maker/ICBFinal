'use strict'

const express = require('express');
const gradoControllers = require('../controllers/gradoControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getGrado', async (req, res) => await gradoControllers.findAll(req, res))
.post('/insertGrado', async (req, res) => await gradoControllers.insertGrado(req, res))
.put('/updateGrado', async (req, res) => await gradoControllers.updateGrado(req, res))
.delete('/deleteGrado/:id_grado', async (req, res) => await gradoControllers.deleteGrado(req, res));

module.exports = apiRoutes;