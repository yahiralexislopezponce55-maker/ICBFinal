'use strict'

const db = require('../config/db');
const Clases = db.Clases;

// Traer todas las clases
async function findAll(req, res){
    Clases.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar una clase
async function insertClase(req, res){
    const claseInsert = req.body;

    Clases.create({
        nombre_clase: claseInsert.nombre_clase,
        estado: claseInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar una clase
async function updateClase(req, res){
    const claseUpdate = req.body;

    Clases.update(claseUpdate, {
        where: { id_clase: claseUpdate.id_clase }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Clase actualizada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar la clase con ID=${claseUpdate.id_clase}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar la clase"
        });
    });
}

// Eliminar clase
async function deleteClase(req, res){
    const id = req.params.id;

    Clases.destroy({
        where: { id_clase: id }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Clase eliminada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar la clase con ID=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar la clase"
        });
    });
}

module.exports = {
    findAll,
    insertClase,
    updateClase,
    deleteClase
}