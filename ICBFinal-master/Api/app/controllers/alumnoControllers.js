'use strict'

const db = require('../config/db');
const Alumnos = db.Alumnos;

// Traer todos los alumnos
async function findAll(req, res){
    Alumnos.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar un alumno
async function insertAlumno(req, res){
    const alumnoInsert = req.body;
    Alumnos.create({
      
        id_alumno: alumnoInsert.id_alumno || undefined,
        numero_identidad: alumnoInsert.numero_identidad,  
        id_seccion: alumnoInsert.id_seccion,
        nombre: alumnoInsert.nombre,
        edad: alumnoInsert.edad,
        genero: alumnoInsert.genero,
        estado: alumnoInsert.estado
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar un alumno
async function updateAlumno(req, res){
    const alumnoUpdate = req.body;
    Alumnos.update(alumnoUpdate, {
        where: { id_alumno: alumnoUpdate.id_alumno }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Alumno actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el alumno con ID=${alumnoUpdate.id_alumno}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar alumno"
        });
    });
}

// Eliminar un alumno
async function deleteAlumno(req, res){
    const id_alumno = req.params.id_alumno;
    Alumnos.destroy({
        where: { id_alumno: id_alumno }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Alumno eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar el alumno con ID=${id_alumno}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el alumno"
        });
    });
}

module.exports = {
    findAll,
    insertAlumno,
    updateAlumno,
    deleteAlumno
}