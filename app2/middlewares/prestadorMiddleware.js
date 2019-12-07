const sequelize = require("../database/database");
const express = require("express");

// const prestadorController = require("../controllers/prestadorController");

module.exports ={async  teste(req,res, next) {
    console.log("Seu request passou no  prestador middleware")
    next()
}};