const {Router} = require("express")
const { consultarCinta, consultarCintaID, eliminarCintaID, agregarCinta, actualizarCinta } = require("../controllers/cinta")
const router = Router()

//http://localhost:4005/betflix/cinta

//GET
router.get("/", consultarCinta)
router.get("/id/:id", consultarCintaID)

//DELETE
router.delete("/",eliminarCintaID)

//POST
router.post("/",agregarCinta)

//PUT
router.put("/",actualizarCinta)


module.exports = router