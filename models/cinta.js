const modeloCinta = {
    consultaCinta: "SELECT * FROM cinta",
    consultaCintaID : `SELECT * FROM cinta WHERE ID=?`,
    eliminarCintaID : `UPDATE cinta SET Activo='N' WHERE ID=?`,
    existeCinta : `SELECT Nombre FROM cinta WHERE Nombre = ?`,
    agregarCinta:`
    INSERT INTO cinta(
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
    )VALUES(
        ?,
        ?,
        ?,
        ?,
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


module.exports=modeloCinta