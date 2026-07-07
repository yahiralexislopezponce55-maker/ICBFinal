'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const attributes = {
    id_seccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    numero_seccion: {
      type: DataTypes.STRING(10)
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
    tableName: 'Seccion',
    timestamps: false
  };

  return sequelize.define('Seccion', attributes, options);
}