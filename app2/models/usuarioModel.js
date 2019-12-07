const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");


const Usuario = sequelize.define(
  "tb_usuario",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      type: Sequelize.STRING,
    },
    senha: {
        type: Sequelize.STRING,
      },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const UsuarioException = class UsuarioException extends Error {};

module.exports = { Usuario, UsuarioException };
