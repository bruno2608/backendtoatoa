const sequelize = require("../database/database");
const express = require("express");

const personController = require("../controllers/personController");

module.exports ={async  teste(req,res, next) {
    console.log("Seu request passou no middleware")
    next()
}};