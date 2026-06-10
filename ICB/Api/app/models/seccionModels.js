'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_seccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    numero_seccion: {
      type: DataTypes.STRING(10)
    }
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    tableName: 'Seccion',
    timestamps: false
  };

  return sequelize.define('Seccion', attributes, options);
}