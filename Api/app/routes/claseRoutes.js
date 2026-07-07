'use strict'

const express = require('express');
const claseControllers = require('../controllers/claseControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getClases', async (req, res) => await claseControllers.findAll(req, res))
.post('/insertClase', async (req, res) =>  claseControllers.insertClase(req, res))
.put('/updateClase', async (req, res) =>  claseControllers.updateClase(req, res))
.delete('/deleteClase/:id', async (req, res) =>   claseControllers.deleteClase(req, res));

module.exports = apiRoutes;