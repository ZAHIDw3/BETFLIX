const express = require('express')
const clientelaRouter = require('./routes/clientela')
const cintaRouter = require('./routes/cinta')
const coleccionRouter = require('./routes/coleccion')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
        this.paths ={
            clientela:"/betflix/clientela",
            cinta:"/betflix/cinta",
            coleccion:"/betflix/coleccion",
        }
        this.middlewares()
        this.routes()
    }

    routes(){      
       this.app.use(this.paths.clientela, clientelaRouter)
       this.app.use(this.paths.cinta, cintaRouter)
       this.app.use(this.paths.coleccion, coleccionRouter)
    }

    middlewares(){
        this.app.use(cors()) 
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Betflix en ejecución en el puerto", process.env.PORT)
        })
    }
}

module.exports=Server