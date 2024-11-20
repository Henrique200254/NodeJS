import { Sequelize } from "sequelize";
 //conexão com o banco de dados
 const sequelize = new Sequelize("postapp", "root", "", {
    host: "localhost",
    dialect: "mysql"
})
// estamos exportando as duas contantes para o index
export default {Sequelize: Sequelize, sequelize: sequelize}