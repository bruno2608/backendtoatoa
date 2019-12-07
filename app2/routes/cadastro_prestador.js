const express = require("express");
const router = express.Router(); 

const prestadorController = require("../controllers/prestadorController"); 
const prestadorMid = require("../middlewares/prestadorMiddleware"); 

router.post("/",  prestadorMid.teste, prestadorController.savePrestador);
// DEIXAR "/" PARA QUE QUALQUER URL QUE CHEGAR CAIA NO POST DO FORM NO ejs

router.get('/', (req, res, next ) => {
    res.render('cadastro_prestador.ejs')
});

module.exports = router
// module.exports = prestador
