import express from "express"
import path from "path"
const app = express() 
const __dirname = path.resolve()
import handlebars from "express-handlebars"
import Post from "./models/Post.js" 



//config 
  //template engine
    app.engine("handlebars", handlebars.engine({defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }))
    app.set("view engine", "handlebars")
 
   // body-parser
   app.use(express.json())
   app.use(express.urlencoded({extencoded: false}))
   
//Rotas
   app.get('/', function(req,res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })  
   })


   app.get('/cad', function(req,res){
       res.render("formulario")
   })

   app.post('/add', function(req,res){
       
     Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
     }).then(function(){
        res.redirect('/')
     }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
     }) 
    /*res.send(`Texto: ${req.body.titulo} <br> Conteudo: ${req.body.conteudo}`)*/
   })
    // rota para deletar posts
   app.get('/deletar/:id', function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
       res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
       res.send("Esta postagem não existe!")
    })
   })

/*
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog!")
})

// Passagem de parametros para o servidor sendo usado como variveis para exibir dados

app.get("/ola/:nome/:cargo",function(req,res){
    res.send("Ola "+ req.params.nome +"<br>"+ "Seu cargo é "+ req.params.cargo)
})
*/
app.listen(8081, function(){
    console.log("Servidor rodando na URL http://localhost:8081")
})

