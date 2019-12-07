
const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Genero = sequelize.define(
  "tb_genero",
  {
    id_genero: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao_genero: { 
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const GeneroException = class GeneroException extends Error {};

module.exports = { Genero, GeneroException };
