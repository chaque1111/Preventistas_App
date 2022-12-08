const {Router} = require("express");
const {getAllClients} = require("../controllers/clientes")


const router = Router();

router.get("/", getAllClients );





module.exports = router
