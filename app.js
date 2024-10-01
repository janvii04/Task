const express = require("express")

const app = express()

require('./dbconnection').connectionDB();

const Port = 3000;

app.listen(Port,()=>  {
    
console.log(`listening at port ${Port}`)

});