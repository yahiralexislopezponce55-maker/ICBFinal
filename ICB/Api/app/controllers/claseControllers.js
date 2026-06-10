'use strict'

const db = require('../config/db');
const Clases = db.Clases;


async function findAll(req, res){
    Clases.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}


async function insertClase(req, res){
    const claseInsert = req.body;
    Clases.create({
        id_clase: claseInsert.id_clase,
        nombre_clase: claseInsert.nombre_clase
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}


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


async function deleteClase(req, res){
    const id_clase = req.params.id_clase;
    Clases.destroy({
        where: { id_clase: id_clase }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Clase eliminada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar la clase con ID=${id_clase}`
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