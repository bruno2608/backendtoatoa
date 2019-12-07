const cliente = require('../models/clienteModel')
const genero = require('../models/generoModel')
const pessoa = require('../models/pessoaModel')
const usuario = require('../models/usuarioModel')


module.exports ={ async  saveCliente(req, res) {

    console.log("Seu request chegou no controller")
    console.log(req.body.nome_pessoa)
    console.log(req.body.nome_apelido)
    console.log(req.body.cpf)
    console.log(req.body.login)
    console.log(req.body.senha
        )   
    //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const nome_pessoa = req.body.nome_pessoa;
    const nome_apelido = req.body.nome_apelido;
    const descricao_genero = req.body.descricao_genero;
    const cpf = req.body.cpf;
    const login = req.body.login;
    const senha = req.body.senha;


    //nesse trecho criamos  a pessoa, capturamos o id e colocamos em uma constante e depois pegamos os dados de marital_status solteiro
    const tb_Cliente = await cliente.Cliente.create(
        {
           nome_apelido
        }
    );
    const tb_pessoa = await pessoa.Pessoa.create(
        {
        nome_pessoa, cpf 
        }
    );
    const tb_usuario = await usuario.Usuario.create(
        {
        login, senha
        }
    );
    const tb_genero = await genero.Genero.create(
        { 
            descricao_genero 
        }
    );
    const busca_genero = await genero.Genero.findAll(
        {
             where: {
                 descricao_genero: ''
                } 
        }
    );

    
    // const tb_genero = await usuario.Usuario.get(
    //     {
    //     descricao_genero
    //     }
    // );
}};