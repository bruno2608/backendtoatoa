const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Prestador = sequelize.define(
  'tb_prestador',//nome do tabela no banco
  {
    id_prestador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rg: {
      type: Sequelize.STRING,
    },
    cpf: { //campo cpf, que consta na tabela pessoa
      type: Sequelize.STRING,
    },
    telefone_celular: { // telefone celular
      type: Sequelize.STRING,
    },
    altura: {
        type: Sequelize.STRING,
    },
    peso: {
        type: Sequelize.FLOAT,
    },
    data_nascimento: { //data nascimento
        type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const PrestadorException = class PrestadorException extends Error {};

module.exports = { Prestador, PrestadorException };
