const { Router } = require('express');
const {
  createTransaction,
  getNumberOnder,
  getOrder,
  putNumberOrder,
  getOrderById,
} = require('../controllers/transaccion');

const router = Router();

router.get('/pedido', getNumberOnder);
router.get('/pedido/lista', getOrder);
router.get('/pedido/lista/:numberOrder', getOrderById);
router.put('/pedido/:number', putNumberOrder);
router.post('/', createTransaction);
module.exports = router;
