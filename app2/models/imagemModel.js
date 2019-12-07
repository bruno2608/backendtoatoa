/* const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');

const Imagem = sequelize.define(
    'tb_imagem',
    {
        id_imagem: {
            type: Sequelize.INTEGER,
            primarykey: true,
            autoincrement: true,
        },
        url_imagem: {
            type: Sequelize.STRING,
        },        
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

const ImagemException = class ImagemException extends Error {};

module.exports = { Imagem, ImagemException }; */