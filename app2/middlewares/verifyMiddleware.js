const sequelize = require("../database/database");
const express = require("express");
const jwt = require('jsonwebtoken');

module.exports = { verifyJWT(req, res, next){
    console.log("Caiu na verificação de token")
    console.log(req.headers)
    var token = req.headers['authorization'].split(' ')[1];
    //console.log(token)
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, process.env.SECRET, function(err, decoded) {   
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        // se tudo estiver ok, salva no request para uso posterior
        req.id_usuario = decoded.id;
        console.log("Autorizado")
        next();
        });
    }
};