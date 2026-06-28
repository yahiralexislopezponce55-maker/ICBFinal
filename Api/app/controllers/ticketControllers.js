'use strict'

const db = require('../config/db');
const Ticket = db.Ticket;

// Traer todos los tickets
async function findAll(req, res){
    Ticket.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar ticket
async function insertTicket(req, res){
    const ticketInsert = req.body;

    Ticket.create({
        id_padre: ticketInsert.id_padre,
        id_alumno: ticketInsert.id_alumno,
        tipo_gestion: ticketInsert.tipo_gestion,
        descripcion: ticketInsert.descripcion,
        fecha: ticketInsert.fecha,
        hora: ticketInsert.hora
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar ticket
async function updateTicket(req, res){
    const ticketUpdate = req.body;

    Ticket.update(ticketUpdate, {
        where: { id_ticket: ticketUpdate.id_ticket }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Ticket actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el ticket con ID=${ticketUpdate.id_ticket}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el ticket"
        });
    });
}

// Eliminar ticket
async function deleteTicket(req, res){
    const id = req.params.id;

    Ticket.destroy({
        where: { id_ticket: id }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Ticket eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar el ticket con ID=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el ticket"
        });
    });
}

module.exports = {
    findAll,
    insertTicket,
    updateTicket,
    deleteTicket
}