'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_grado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre_grado: {
      type: DataTypes.STRING(100)
    },
    id_seccion: {
      type: DataTypes.INTEGER
    },
    id_clase:{
      type: DataTypes.INTEGER
    }
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    tableName: 'Grado',
    timestamps: false
  };

  return sequelize.define('Grado', attributes, options);
}