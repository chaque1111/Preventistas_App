const {Router} = require("express");
const {getAllClients, getClientById} = require("../controllers/clientes");

const router = Router();

router.get("/", getAllClients);
router.get("/:id", getClientById);

module.exports = router;
