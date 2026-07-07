'use strict'

const db = require('../config/db');
const Grado = db.Grado;

// Traer todos los grados
async function findAll(req, res){
    Grado.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un grado
async function insertGrado(req, res){
    const gradoInsert = req.body;

    Grado.create({
        nombre_grado: gradoInsert.nombre_grado,
        id_seccion: gradoInsert.id_seccion,
        id_clase: gradoInsert.id_clase
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un grado
async function updateGrado(req, res){
    const gradoUpdate = req.body;

    Grado.update(gradoUpdate, {
        where: { id_grado: gradoUpdate.id_grado }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Grado actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el grado con ID=${gradoUpdate.id_grado}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el grado"
        });
    });
}

// Eliminar grado
async function deleteGrado(req, res){
    const id = req.params.id;

    Grado.destroy({
        where: { id_grado: id }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Grado eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar el grado con ID=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el grado"
        });
    });
}

module.exports = {
    findAll,
    insertGrado,
    updateGrado,
    deleteGrado
}