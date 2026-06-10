'use strict'

const db = require('../config/db');
const Seccion = db.Seccion;


async function findAll(req, res){
    Seccion.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}


async function insertSeccion(req, res){
    const seccionInsert = req.body;
    Seccion.create({
        id_seccion: seccionInsert.id_seccion,
        numero_seccion: seccionInsert.numero_seccion
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}


async function updateSeccion(req, res){
    const seccionUpdate = req.body;
    Seccion.update(seccionUpdate, {
        where: { id_seccion: seccionUpdate.id_seccion }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Sección actualizada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar la sección con ID=${seccionUpdate.id_seccion}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar la sección"
        });
    });
}


async function deleteSeccion(req, res){
    const id_seccion = req.params.id_seccion;
    Seccion.destroy({
        where: { id_seccion: id_seccion }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Sección eliminada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar la sección con ID=${id_seccion}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar la sección"
        });
    });
}

module.exports = {
    findAll,
    insertSeccion,
    updateSeccion,
    deleteSeccion
}