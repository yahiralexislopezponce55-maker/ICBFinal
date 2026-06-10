'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    id_padre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
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
    direccion: {
      type: DataTypes.STRING(200)
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