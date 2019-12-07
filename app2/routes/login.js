const express = require("express");//importando os comportamentos da lib do express, assim como foi feito no app2
const router = express.Router(); //importando os comportamentos do "roteador" gerenciado pelo express

const auth = require('../middlewares/authMiddleware.js')

router.post('/', auth.UserAuthentication);

router.get('/', (req, res, next ) => {
    res.render('login.ejs')
});
module.exports = router