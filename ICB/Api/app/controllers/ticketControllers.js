'use strict'

const db = require('../config/db');
const Ticket = db.Ticket;


async function findAll(req, res){
    Ticket.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}


async function insertTicket(req, res){
    const ticketInsert = req.body;
    Ticket.create({
        id_ticket: ticketInsert.id_ticket,
        id_padre: ticketInsert.id_padre,
        id_alumno: ticketInsert.id_alumno,
        tipo_gestion: ticketInsert.tipo_gestion,
        descripcion: ticketInsert.descripcion,
        fecha: ticketInsert.fecha,
        hora: ticketInsert.hora,
        estado: ticketInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}


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


async function deleteTicket(req, res){
    const id_ticket = req.params.id_ticket;
    Ticket.destroy({
        where: { id_ticket: id_ticket }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Ticket eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar el ticket con ID=${id_ticket}`
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