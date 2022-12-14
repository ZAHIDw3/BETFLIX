const {Router} = require("express")
const { consultarClientela, consultarClientelaID, eliminarClientelaID, agregarClientela, actualizarCLientela, iniciarSecionClientela, nuevaContraseñaCLientela } = require("../controllers/clientela")
const router = Router()

//http://localhost:4005/betflix/clientela

//GET
router.get("/", consultarClientela)
router.get("/id/:id", consultarClientelaID)

//DELETE
router.delete("/",eliminarClientelaID)

//POST
router.post("/",agregarClientela)
router.post("/login",iniciarSecionClientela)

//PUT
router.put("/",actualizarCLientela)
router.put("/nueva_contrasena",nuevaContraseñaCLientela)


module.exports = router