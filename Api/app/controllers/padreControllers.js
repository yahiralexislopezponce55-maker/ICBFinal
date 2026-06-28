'use strict'

const db = require('../config/db');
const Padres = db.Padres;

// Traer todos los padres
async function findAll(req, res){
    Padres.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un padre
async function insertPadre(req, res){
    const padreInsert = req.body;

    Padres.create({
        numero_identidad: padreInsert.numero_identidad,
        id_alumno: padreInsert.id_alumno,
        nombre: padreInsert.nombre,
        telefono: padreInsert.telefono,
        estado: padreInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un padre
async function updatePadre(req, res){
    const padreUpdate = req.body;

    Padres.update(padreUpdate, {
        where: { id_padre: padreUpdate.id_padre }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Padre actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el padre con ID=${padreUpdate.id_padre}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el padre"
        });
    });
}

// Eliminar padre
async function deletePadre(req, res){
    const id = req.params.id;

    Padres.destroy({
        where: { id_padre: id }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Padre eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar el padre con ID=${id}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el padre"
        });
    });
}

module.exports = {
    findAll,
    insertPadre,
    updatePadre,
    deletePadre
}