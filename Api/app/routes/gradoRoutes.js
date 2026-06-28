'use strict'

const express = require('express');
const gradoControllers = require('../controllers/gradoControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getGrado', async (req, res) => await gradoControllers.findAll(req, res))
.post('/insertGrado', async (req, res) =>  gradoControllers.insertGrado(req, res))
.put('/updateGrado', async (req, res) =>  gradoControllers.updateGrado(req, res))
.delete('/deleteGrado/:id', async (req, res) => gradoControllers.deleteGrado(req, res));

module.exports = apiRoutes;