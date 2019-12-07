
const encontro = require('../models/encontroModel')

module.exports ={ async  saveEncontro(req, res) {

    console.log("Seu request chegou no controller")
    console.log(req.body.nome_servico)
    console.log(req.body.valor_servico)
    console.log(req.body.descricao)
    console.log(req.body.DATE)

    
    // //aqui, criamos as constantes com os dados vindos do formulário e geramos a data de input 
    const nome_servico =req.body.nome_servico;
    const valor = req.body.valor_servico;
    const descricao = req.body.descricao;
    const DATE = req.body.DATE;
    

    const tb_encontro = await encontro.Encontro.create(
        {
            nome_servico:nome_servico, valor_servico:valor,  descricao:descricao, data_encontro:DATE
        }
    );
 
 
}};