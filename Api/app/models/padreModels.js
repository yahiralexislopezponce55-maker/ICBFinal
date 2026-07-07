'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    id_padre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    numero_identidad: {
      type: DataTypes.STRING(20),
      unique: true
    },
    id_alumno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(50)
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    tableName: 'Padres',
    timestamps: false
  };

  return sequelize.define('Padres', attributes, options);
}