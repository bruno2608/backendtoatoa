const usuario = require('../models/usuarioModel')
const jwt = require('jsonwebtoken');

module.exports = { async UserAuthentication(req,res, next){
    console.log("caiu aqui")
    console.log("Login " , req.body.login)
    console.log("Senha " , req.body.senha)
    const LoadUser = await usuario.Usuario.findOne({ where: { login: req.body.login} })
    
    if(LoadUser){
        const id = LoadUser.id        
        if(LoadUser.senha === req.body.senha){
            const token = jwt.sign({id}, "segredo", { // CRIAR ENV 
                expiresIn : "7d"//define dias que o token expira
            });
            console.log("Token de acesso " , token)
            res.status(200).send({ auth: true, token: token });
        }
        else{
            console.log('senha error!')
        }
    }
    else{
        console.log("Login not found!")
    }
    next()
}};
