const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.get('/', function (req, res) {
    
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blog2"
    })
    connection.query("SELECT * FROM post JOIN usuario ON usuario.id_user= post.id_user;", (error, result) => {
        
        res.render('paginas/index', {dados: result})
    })
    
})
app.get('/adicionar/postagem', (req, res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blog2"
    })
    connection.query("SELECT * FROM usuario", (error, result) => {
        
        res.render('admin/adicionar_noticia', { dados: result });
    })
   
})

app.post('/noticia/salvar', (req, res) => {
    const post= req.body
    
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blog2"
    })
    connection.query('INSERT INTO post set?', post, () => {
        res.redirect('/')
    })
})
app.get('/novousuario', (req, res) => {

        res.render('admin/novo_usuario');
    
   
})
app.post('/usuario/salvar', (req, res) => {
    const post= req.body
    
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blog2"
    })
    connection.query('INSERT INTO usuario set?', post, () => {
        res.redirect('/')
    })
})

const PORT= process.env.PORT || 3000
app.listen(PORT, function () {
    console.log(`RODANDO PORTA ${PORT}`)
})