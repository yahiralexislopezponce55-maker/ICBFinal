'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const attributes = {
    id_ticket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_padre: {
      type: DataTypes.INTEGER
    },
    id_alumno: {
      type: DataTypes.INTEGER
    },
    tipo_gestion: {
      type: DataTypes.STRING(100)
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    fecha: {
      type: DataTypes.DATEONLY
    },
    hora: {
      type: DataTypes.TIME
    },
    estado: {
      type: DataTypes.STRING(50)
    }
  };

  const options = {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
    tableName: 'Ticket',
    timestamps: false
  };

  return sequelize.define('Ticket', attributes, options);
}