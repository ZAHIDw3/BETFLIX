const { request, response } = require("express");
const pool=require("../db/connection");
const modeloCinta = require("../models/cinta");

const consultarCinta = async(req=request,res=response)=>{
    let conn;
    try{
        conn = await pool.getConnection()
        const cinta = await conn.query(modeloCinta.consultaCinta,(error)=>{throw new error})
        if(!cinta){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({cinta})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const consultarCintaID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [cinta]= await conn.query(modeloCinta.consultaCintaID,[id],(error)=>{throw new error})
        if(!cinta){
            res.status(404).json({msg:`No se encontró una pelicula con el ID=${id}`})
            return
        }
        res.json({cinta})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const eliminarCintaID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloCinta.eliminarCintaID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar la pelicula con el ID=${id}`})
            return
        }
        res.json({msg:`La pelicula con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const agregarCinta = async (req=request,res=response)=>{
    const {
        Nombre,
        Sinopsis,
        Duracion,
        Anio,
        Elenco,
        Direccion,
        Guion,
        Clasificacion_edad,
        Generos,
        Idiomas,
        Idiomas_Subtitulos,
        Activo
    }=req.body

    if(
        !Nombre||
        !Sinopsis||
        !Duracion||
        !Anio||
        !Elenco||
        !Direccion||
        !Guion||
        !Clasificacion_edad||
        !Generos||
        !Idiomas||
        !Idiomas_Subtitulos||
        !Activo
    ){
        res.status(400).json({msg:"Falta información de la pelicula."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloCinta.existeCinta,[Nombre])
        if(user){
            res.status(403).json({msg:`La pelicula '${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloCinta.agregarCinta,[
            Nombre,
            Sinopsis,
            Duracion,
            Anio,
            Elenco,
            Direccion,
            Guion,
            Clasificacion_edad,
            Generos,
            Idiomas,
            Idiomas_Subtitulos,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar la pelicula ${Nombre}`})
            return
        }
        res.json({msg:`La pelicula ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const actualizarCinta = async (req=request,res=response)=>{
    const {
        Nombre,
        Sinopsis,
        Duracion,
        Anio,
        Elenco,
        Direccion,
        Guion,
        Clasificacion_edad,
        Generos,
        Idiomas,
        Idiomas_Subtitulos,
        Activo
    }=req.body

    if(
        !Nombre
    ){
        res.status(400).json({msg:"Falta información de la pelicula."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [cinta]=await conn.query(modeloCinta.informacionCinta,[Nombre])

        if(!cinta){
            res.status(403).json({msg:`La pelicula'${Nombre}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(modeloCinta.actualizarCinta,[
            Sinopsis||cinta.Sinopsis,
            Duracion||cinta.Duracion,
            Anio||cinta.Anio,
            Elenco||cinta.Elenco,
            Direccion||cinta.Direccion,
            Guion||cinta.Guion,
            Clasificacion_edad||cinta.Clasificacion_edad,
            Generos||cinta.Generos,
            Idiomas||cinta.Idiomas,
            Idiomas_Subtitulos||cinta.Idiomas_Subtitulos,
            Activo||cinta.Activo,
            Nombre||cinta.Nombre
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro de la pelicula ${Nombre}`})
            return
        }
        res.json({msg:`La pelicula ${Nombre} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports={consultarCinta,consultarCintaID,eliminarCintaID,agregarCinta,actualizarCinta} 