const {Router} = require("express");
const {
  getAllVendedores,
  getVendedorById,
} = require("../controllers/vendedores");

const router = Router();

router.get("/", getAllVendedores);
router.get("/:id", getVendedorById);

module.exports = router;
