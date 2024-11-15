import { Sequelize } from "sequelize";
const sequelize = new Sequelize("siscadastro", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

// Apenas para testar se a conexão está funcionando corretamente
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro)
})
*/