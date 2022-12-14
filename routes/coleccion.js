const {Router} = require("express")
const { consultarColeccion, eliminarColeccionID, eliminarTemporadaID, agregarColeccion } = require("../controllers/coleccion")
const router = Router()

//http://localhost:4005/betflix/coleccion

//GET
router.get("/", consultarColeccion)
//router.get("/id/:id", consultarCintaID)

//DELETE
router.delete("/eliminarcoleccion/",eliminarColeccionID)
router.delete("/eliminartemporada/",eliminarTemporadaID)

//POST
router.post("/agregarcoleccion/",agregarColeccion)

//PUT
//router.put("/",actualizarCinta)


module.exports = router