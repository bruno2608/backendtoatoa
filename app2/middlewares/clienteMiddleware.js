const sequelize = require("../database/database");
const express = require("express");

//const clienteController = require("../controllers/clienteController");

module.exports ={async  teste(req,res, next) {
    console.log("Seu request passou no  cliente middleware")
    next()
}};