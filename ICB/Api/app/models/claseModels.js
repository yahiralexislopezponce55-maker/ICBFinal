'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_clase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre_clase: {
      type: DataTypes.STRING(100)
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