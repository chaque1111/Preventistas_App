const {Router} = require("express");
const {
  getAllClients,
  getClientById,
  getClientBySeller,
  searchClientsBySeller,
} = require("../controllers/clientes");

const router = Router();

router.get("/", getAllClients);
router.get("/seller/:id", getClientBySeller);
router.get("/:id", getClientById);
router.put("/search", searchClientsBySeller);

module.exports = router;
