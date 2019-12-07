
const usuario = require('../models/usuarioModel')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken');

module.exports ={ async  createUsuario(req, res) {

    const login = req.body.login;
    const senha = req.body.senha;
    const id_usuario = req.body.id_usuario;

    const usuarioExists = await usuario.usuario.findByPk(id_usuario)
    if(usuarioExists){
        var salt = bcrypt.genSaltSync(10, "a");
        console.log(salt)
        var hashedsenha = bcrypt.hashSync(senha, salt);
        console.log(hashedsenha)
        await Usuario.Usuario.create( { login, senha:hashedsenha, id_usuario} );
        console.log("Usuário inserido com sucesso")
    }
    else{
        console.log("Não existe cadastro dessa usuario para relacionar o usuário!")
    }

},

async  loginUsuario(req, res) {

    const login = req.body.login;
    const senha = req.body.senha;
    console.log("Login ", login, " senha ", senha)

    const findUsuario = await usuario.Usuario.findOne({
        where: {login: req.body.login},
    })
    const id = findUsuario.id

    if(findUsuario){
        console.log("resultado find Usuario ",JSON.stringify(findUsuario))
        const comparacao =  bcrypt.compareSync(req.body.senha, findUsuario.senha)
        console.log(comparacao)
        if(comparacao){
            const token = jwt.sign({id}, process.env.SECRET, {
                expiresIn : "7d"
            });
            console.log("Token de acesso " , token)
            res.status(200).send({ auth: true, token: token });
        }
        else{
            res.status(200).send({  auth: false });
        }
    }
    else{
        res.status(404).send({ message : "Usuário não encontrado" });
    }
    
    
}

};