'use strict'

const db = require('../config/db');
const Seccion = db.Seccion;

// Traer todas las secciones
async function findAll(req, res){
    Seccion.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar sección
async function insertSeccion(req, res){
    const seccionInsert = req.body;

    Seccion.create({
        numero_seccion: seccionInsert.numero_seccion,
        estado: seccionInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar sección
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

// Eliminar sección
async function deleteSeccion(req, res){
    const id = req.params.id;

    Seccion.destroy({
        where: { id_seccion: id }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Sección eliminada correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar la sección con ID=${id}`
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