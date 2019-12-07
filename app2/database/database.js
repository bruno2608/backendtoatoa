const Sequelize = require("sequelize");

const sequelize = new Sequelize('db_toatoa', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  }
);

const { Op } = Sequelize;
module.exports = {
    sequelize,
    Op,
};