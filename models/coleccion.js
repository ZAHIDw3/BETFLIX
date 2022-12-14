const modeloColeccion = {
    consultaColeccion: "SELECT * FROM coleccion c  JOIN temporada t  WHERE (c.ID  = t.ID_coleccion)",
    consultaCintaID : `SELECT * FROM cinta WHERE ID=?`,
    eliminarColeccionID : `UPDATE coleccion SET Activo='N' WHERE ID=?`,
    eliminarTemporadaID : `UPDATE temporada SET Activo_Temporada='N' WHERE ID_Temporada=?`,
    existeColeccion : `SELECT Nombre FROM coleccion WHERE Nombre = ?`,
    agregarColeccion:`
    INSERT INTO coleccion(
        Nombre,
        Sinopsis,
        Anio,
        Elenco,
        Creado,
        Clasificacion_edad,
        Generos,
        Activo
    )VALUES(
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    informacionCinta : `SELECT Nombre,Sinopsis,Duracion,Anio,Elenco,Direccion,Guion,Clasificacion_edad,Generos,Idiomas,Idiomas_Subtitulos,Activo FROM cinta WHERE Nombre = ?`,
    actualizarCinta : `
    UPDATE cinta SET
        Sinopsis=?,
        Duracion=?,
        Anio=?,
        Elenco=?,
        Direccion=?,
        Guion=?,
        Clasificacion_edad=?,
        Generos=?,
        Idiomas=?,
        Idiomas_Subtitulos=?,
        Activo=?
    WHERE Nombre= ?
    `
}


module.exports=modeloColeccion