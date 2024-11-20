// As configs de sequelize ficavam aqui
// model definido
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})

/* Criando postagem com insert into via Nodejs
Postagem.create({
    titulo: "Um titulo",
    conteudo: "conteudo qualquer"
})
*/
const usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }

})

usuarios.create({
    nome: "Henrique",
    sobrenome: "Castilho",
    idade: 22,
    email: "email@hotmail.com"
})

//usuarios.sync({force: true})

// Apenas para testar se a conexão está funcionando corretamente
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro)
})
*/