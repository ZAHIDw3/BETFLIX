const modeloClientela = {
    consultaClientela: "SELECT * FROM clientela",
    consultaClientelaID : `SELECT * FROM clientela WHERE ID=?`,
    eliminarClientelaID : `UPDATE clientela SET Activo='N' WHERE ID=?`,
    clienteExiste : `SELECT Correo FROM clientela WHERE Correo = ?`,
    agregarClientela:`
    INSERT INTO clientela(
        Correo,
        Contrasena,
        Telefono,
        Forma_Pago,
        Plan,
        Fecha_Facturacion,
        Plan_Activo,
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
    informacionClientela : `SELECT Correo,Contrasena,Telefono,Forma_Pago,Plan,Fecha_Facturacion,Plan_Activo,Activo FROM clientela WHERE Correo = ?`,
    actualizarClientela : `
    UPDATE clientela SET
        Telefono=?,
        Forma_Pago=?,
        Plan=?,
        Fecha_Facturacion=?,
        Plan_Activo=?,
        Activo=?
    WHERE Correo= ?
    `,
    iniciarSecionClientela : `SELECT Correo, Contrasena, Activo FROM clientela WHERE Correo = ?`,
    actualizarContraseñaClientela : `UPDATE clientela SET Contrasena=? WHERE Correo= ?`
}


module.exports=modeloClientela