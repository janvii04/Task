const Sequelize = require("sequelize");
const sequelize= newSequelize('mitali1','root','janvi@202004',{

host:'localhost',
dialect: "mysql",

});
const connectionDB= async() =>{

    await sequelize.authenticate()
    .then(async() =>{
        await sequelize.sync({alter:false});
        console.log('dbconnection')
    }).catch ((err) =>{
        console.log(err)})
    }
    module.exports = {
        sequelize:sequelize,
        connectionDB:connectionDB
    }
    



