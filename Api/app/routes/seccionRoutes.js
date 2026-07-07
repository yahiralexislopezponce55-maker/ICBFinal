'use strict'

const express = require('express');
const seccionControllers = require('../controllers/seccionControllers');

const apiRoutes = express.Router();

apiRoutes
  .get('/getSeccion', async (req, res) => await seccionControllers.findAll(req, res))
  .post('/insertSeccion', async (req, res) =>  seccionControllers.insertSeccion(req, res))
  .put('/updateSeccion', async (req, res) => seccionControllers.updateSeccion(req, res))
  .delete('/deleteSeccion/:id', async (req, res) => seccionControllers.deleteSeccion(req, res));

module.exports = apiRoutes;