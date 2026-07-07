'use strict'

const Sequelize = require('sequelize');
require('dotenv').config();

// Conexión con la base de datos usando variables de entorno
const sequelizeInstance = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        dialectOptions: {
            connectTimeout: 100000,
        },
        operatorsAliases: false,
        pool: {
            max: parseInt(process.env.POOL_MAX),
            min: parseInt(process.env.POOL_MIN),
            acquire: parseInt(process.env.POOL_ACQUIRE),
            idle: parseInt(process.env.POOL_IDLE),
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

// 🔹 Crear el modelo de Seccion
db.Seccion = require('../models/seccionModels')(sequelizeInstance);
db.Grado = require('../models/gradoModels')(sequelizeInstance);
db.Clases = require('../models/claseModels')(sequelizeInstance);
db.Maestros =require('../models/maestroModels')(sequelizeInstance);
db.Alumnos = require('../models/alumnoModels')(sequelizeInstance);
db.Padres = require('../models/padreModels')(sequelizeInstance);
db.Ticket = require('../models/ticketModels')(sequelizeInstance);
module.exports = db;