'use strict'

const db = require('../config/db');
const Maestros = db.Maestros;


async function findAll(req, res){
    Maestros.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}


async function insertMaestro(req, res){
    const maestroInsert = req.body;
    Maestros.create({
        id_maestro: maestroInsert.id_maestro,
        id_grado: maestroInsert.id_grado,
        nombre: maestroInsert.nombre,
        numero: maestroInsert.numero
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}


async function updateMaestro(req, res){
    const maestroUpdate = req.body;
    Maestros.update(maestroUpdate, {
        where: { id_maestro: maestroUpdate.id_maestro }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Maestro actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el maestro con ID=${maestroUpdate.id_maestro}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el maestro"
        });
    });
}


async function deleteMaestro(req, res){
    const id_maestro = req.params.id_maestro;
    Maestros.destroy({
        where: { id_maestro: id_maestro }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Maestro eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar el maestro con ID=${id_maestro}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el maestro"
        });
    });
}

module.exports = {
    findAll,
    insertMaestro,
    updateMaestro,
    deleteMaestro
}