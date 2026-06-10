'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_maestro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_grado: {
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING(100)
    },
    numero: {
      type: DataTypes.INTEGER
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