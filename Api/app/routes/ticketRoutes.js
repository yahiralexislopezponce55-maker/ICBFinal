'use strict'

const express = require('express');
const ticketControllers = require('../controllers/ticketControllers');

const apiRoutes = express.Router();

apiRoutes
.get('/getTickets', async (req, res) => await ticketControllers.findAll(req, res))
.post('/insertTicket', async (req, res) =>  ticketControllers.insertTicket(req, res))
.put('/updateTicket', async (req, res) =>  ticketControllers.updateTicket(req, res))
.delete('/deleteTicket/:id', async (req, res) => ticketControllers.deleteTicket(req, res));

module.exports = apiRoutes;