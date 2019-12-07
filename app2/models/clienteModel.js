const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const Cliente = sequelize.define(
  'tb_cliente',
  {
    id_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome_apelido: { //nome do apelido
      type: Sequelize.STRING
    },
    id_gereno: {
      type: Sequelize.INTEGER,
    }
  },
   {
     timestamps: false,
     freezeTableName: true,
   }
);

const ClienteException = class ClienteException extends Error {};

module.exports = { Cliente, ClienteException };
