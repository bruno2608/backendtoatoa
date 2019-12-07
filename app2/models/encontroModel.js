const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Encontro = sequelize.define(
  'tb_encontro',
  {
    id_encontro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_servico: {
      type: Sequelize.STRING,
    },
    valor_servico: {
      type: Sequelize.FLOAT,
    },
    descricao: {
      type: Sequelize.STRING,
    },
    data_encontro: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const EncontroException = class EncontroException extends Error {};

module.exports = { Encontro, EncontroException };
