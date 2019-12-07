const express = require("express");
const router = express.Router(); 

// const pessoaController = require("../controllers/pessoaController"); 
// const pessoaMid = require("../middlewares/pessoaMiddleware"); 

router.post("/",  pessoaMid.teste, pessoaController.savePessoa);
// DEIXAR "/" PARA QUE QUALQUER URL QUE CHEGAR CAIA NO POST DO FORM NO ejs

router.get('/', (req, res, next ) => {
    res.render('cadastro_pessoa.ejs')
});


module.exports = router
// module.exports = pessoa
