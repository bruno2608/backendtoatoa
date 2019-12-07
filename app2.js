//criando uma constante para armazenar as funcionalidades da lib express (que gerencia nosso app)
const express = require("express"); 
//constante que tem a lib body-parser, usada para interpretar e transformar o body das requisições
const bodyParser = require("body-parser");
//constante que tem os comportamentos padrão do http (não usamos diretamente aqui)
const http = require('http');
const fs = require('fs');
//constante que inicializa nosso app gerenciado pelo express
const app = express();

const cadastro_encontro = require("./app2/routes/cadastro_encontro");
const cadastrar = require("./app2/routes/cadastrar");
const cadastro_prestador = require("./app2/routes/cadastro_prestador");
const cadastro_cliente = require("./app2/routes/cadastro_cliente");
const login = require("./app2/routes/login");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors ({
    origin: '*'
}));

app.set('view engine', 'ejs');//definindo que a lib ejs vai gerenciar a parte visual provisória do app
app.use( express.static("public"));//definindo que a lib ejs vai gerenciar a parte visual provisória do app

app.get("/", (req, res, next ) => {
    res.render('index.ejs')
});

app.use("/login", login);
app.get("/login",(req, res, next ) => {
    res.render('login.ejs')
});
    
//DEFINE ROTA DE CADASTRO DE ENCOTROS
app.use("/cadastro_encontro", cadastro_encontro);
app.get("/cadastro_encontro", (req, res, next ) => {
    res.render('cadastro_encontro.ejs')
});

//DEFINE ROTA DE CADASTRO
app.use("/cadastrar", cadastrar);
app.get("/cadastrar", (req, res, next ) => {
    res.render('cadastro.ejs')
});

//DEFINE ROTA DE CADASTRO DE PRESTADORES DE SERVIÇOS
app.use("/cadastro_prestador", cadastro_prestador);
app.get("/cadastro_prestador", (req, res, next ) => {
    res.render('cadastro_prestador.ejs')
});

//DEFINE ROTA DE CADASTRO DE CLIENTES
app.use("/cadastro_cliente", cadastro_cliente);
app.get("/cadastro_cliente", (req, res, next ) => {
    res.render('cadastro_cliente.ejs')
});

//DEFINE ROTA DE GENERO
// app.use("/genero", genero);
// app.get("/genero", (req, res, next ) => {
//     res.render('genero.ejs')
// });

//DEFINE PORTA 3000 DA LOCALHOST
app.listen(3000);