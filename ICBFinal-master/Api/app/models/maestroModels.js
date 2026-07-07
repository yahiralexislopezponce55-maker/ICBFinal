'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_maestro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    numero_identidad: {
      type: DataTypes.STRING(20),
      unique: true
    },
    nombre: {
      type: DataTypes.STRING(100)
    },
    telefono: {
      type: DataTypes.STRING(20)
    },
    id_grado: {
      type: DataTypes.INTEGER
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
    tableName: 'Maestros',
    timestamps: false
  };

  return sequelize.define('Maestros', attributes, options);
}