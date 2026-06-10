'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    id_alumno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_seccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER
    },
    genero: {
      type: DataTypes.STRING(10)
    },
    estado: {
      type: DataTypes.STRING(20)
    }
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    tableName: 'Alumnos',
    timestamps: false
  };

  return sequelize.define('Alumnos', attributes, options);
}