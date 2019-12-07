const sequelize = require("../database/database");
const express = require("express");


module.exports ={async  teste(req,res, next) {
    console.log("Seu request passou no  login middleware")
    next()
}};