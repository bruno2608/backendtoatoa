const prestador = require('../models/prestadorModel')
const pessoa = require('../models/pessoaModel')
//const functions = require('../utils/functions')


module.exports ={ async  savePrestador(req, res) {

    console.log("Seu request chegou no controller")
    console.log(req.body.nome_pessoa)
    console.log(req.body.rg)
    console.log(req.body.cpf)
    console.log(req.body.telefone_celular)
    console.log(req.body.altura)
    console.log(req.body.peso)
    console.log(req.body.data_nascimento)
        
    //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const nome_pessoa =req.body.nome_pessoa;
    const rg =req.body.rg;
    const cpf =req.body.cpf;
    const telefone_celular =req.body.telefone_celular;
    const altura =req.body.altura;
    const peso =req.body.peso;
    const data_nascimento = req.body.data_nascimento;

    const tb_Prestador = await prestador.Prestador.create(
        { 
        rg, telefone_celular, altura, peso, data_nascimento 
        }
    );
    const tb_pessoa = await pessoa.Pessoa.create(
        {
        nome_pessoa, cpf 
        }
    );
}};