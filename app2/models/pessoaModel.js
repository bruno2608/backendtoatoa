const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Pessoa = sequelize.define(
  "tb_pessoa",
  {
    id_pessoa: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_pessoa: {
      type: Sequelize.STRING,
    },
    cpf: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const PessoaException = class PessoaException extends Error {};

module.exports = { Pessoa, PessoaException };
