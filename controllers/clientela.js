const { request, response } = require("express");
const bcryptjs=require("bcryptjs")
const pool=require("../db/connection");
const modeloClientela = require("../models/clientela");

const consultarClientela = async(req=request,res=response)=>{
    let conn;
    try{
        conn = await pool.getConnection()
        const cliente = await conn.query(modeloClientela.consultaClientela,(error)=>{throw new error})
        if(!cliente){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({cliente})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const consultarClientelaID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [cliente]= await conn.query(modeloClientela.consultaClientelaID,[id],(error)=>{throw new error})
        if(!cliente){
            res.status(404).json({msg:`No se encontró cliente con el ID=${id}`})
            return
        }
        res.json({cliente})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const eliminarClientelaID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloClientela.eliminarClientelaID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar el cliente con el ID=${id}`})
            return
        }
        res.json({msg:`El cliente con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const agregarClientela = async (req=request,res=response)=>{
    const {
        Correo,
        Contrasena,
        Telefono,
        Forma_Pago,
        Plan,
        Fecha_Facturacion,
        Plan_Activo,
        Activo
    }=req.body

    if(
        !Correo||
        !Contrasena||
        !Forma_Pago||
        !Plan||
        !Fecha_Facturacion||
        !Plan_Activo||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }

    let conn;

    

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloClientela.clienteExiste,[Correo])
        if(user){
            res.status(403).json({msg:`El cliente con el correo '${Correo}' ya se encuentra registrado.`})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const contrasenaCifrada = bcryptjs.hashSync(Contrasena,salt) 

        const {affectedRows} = await conn.query(modeloClientela.agregarClientela,[
            Correo,
            contrasenaCifrada,
            Telefono || '999999999',
            Forma_Pago,
            Plan,
            Fecha_Facturacion,
            Plan_Activo,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del cliente ${Correo}`})
            return
        }
        res.json({msg:`El cliente con el correo ${Correo} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const actualizarCLientela = async (req=request,res=response)=>{
    const {
        Correo,
        Telefono,
        Forma_Pago,
        Plan,
        Fecha_Facturacion,
        Plan_Activo,
        Activo
    }=req.body

    if(
        !Correo
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [cliente]=await conn.query(modeloClientela.informacionClientela,[Correo])

        if(!cliente){
            res.status(403).json({msg:`El cliente con el correo '${Correo}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(modeloClientela.actualizarClientela,[
            Telefono||cliente.Telefono,
            Forma_Pago||cliente.Forma_Pago,
            Plan||cliente.Plan,
            Fecha_Facturacion||cliente.Fecha_Facturacion,
            Plan_Activo||cliente.Plan_Activo,
            Activo||cliente.Activo,
            Correo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del cliente con el correo ${Correo}`})
            return
        }
        res.json({msg:`El cliente con el correo ${Correo} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const iniciarSecionClientela = async (req=request,res=response)=>{
    const {
        Correo,
        Contrasena
    }=req.body

    if(
        !Correo||
        !Contrasena
    ){
        res.status(400).json({msg:"Falta información del cliente."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [cliente]=await conn.query(modeloClientela.informacionClientela,[Correo])

        if(!cliente || cliente.Activo == 'N'){
            let code = !cliente ? 1: 2;
            res.status(403).json({msg:`El correo o la contraseña son incorrectos`,errorCode:code})
            return
        }

        const accesoValido = bcryptjs.compareSync(Contrasena,cliente.Contrasena)

        if(!accesoValido){
            res.status(403).json({msg:`El correo o la contraseña son incorrectos`,errorCode:"3"})
            return
        }


        res.json({msg:`El cliente ${Correo} ha iniciado seción satisfactoriamenente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const nuevaContraseñaCLientela = async (req=request,res=response)=>{
    const {
        Correo,
        Contrasena_Actual,
        Contrasena_Nueva
    }=req.body

    if(
        !Correo||
        !Contrasena_Actual||
        !Contrasena_Nueva
    ){
        res.status(400).json({msg:"Faltan datos."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [clientela]=await conn.query(modeloClientela.iniciarSecionClientela,[Correo])

        if(!clientela || clientela.Activo == 'N'){
            let code = !clientela ? 1: 2;
            res.status(403).json({msg:`El correo o la contraseña son incorrectos`,errorCode:code})
            return
        }

        const datosValidos = bcryptjs.compareSync(Contrasena_Actual,clientela.Contrasena)

        if(!datosValidos){
            res.status(403).json({msg:`El correo o la contraseña son incorrectos`,errorCode:"3"})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const contrasenaCifrada = bcryptjs.hashSync(Contrasena_Nueva,salt) 

        const {affectedRows} = await conn.query(modeloClientela.actualizarContraseñaClientela,[contrasenaCifrada,Correo],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar la contraseña de ${Correo}`})
            return
        }
        res.json({msg:`La contraseña de ${Correo} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports={consultarClientela,consultarClientelaID,eliminarClientelaID,agregarClientela,actualizarCLientela,iniciarSecionClientela,nuevaContraseñaCLientela} 