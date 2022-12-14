const {Router} = require("express");
const {createTransaction} = require("../controllers/transaccion");

const router = Router();

router.post("/", createTransaction);

module.exports = router;
