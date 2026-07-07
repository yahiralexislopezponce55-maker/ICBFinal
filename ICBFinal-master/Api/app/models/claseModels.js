'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_clase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_clase: {
      type: DataTypes.STRING(100)
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
    tableName: 'Clases',
    timestamps: false
  };

  return sequelize.define('Clases', attributes, options);
}