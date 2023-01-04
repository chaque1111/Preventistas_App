const {Router} = require("express");
const {
  createTransaction,
  getNumberOnder,
  putNumberOrder,
} = require("../controllers/transaccion");

const router = Router();

router.get("/", getNumberOnder);
router.put("/:number", putNumberOrder);
router.post("/", createTransaction);
module.exports = router;
