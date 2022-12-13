const {Router} = require("express");
// Importar todos los routers;
const router = Router();
const clienteMain = require("./clientes");
const vendedorMain = require("./vendedores");
const inventarioMain = require("./inventario");
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/clientes", clienteMain);
router.use("/vendedores", vendedorMain);
router.use("/inventario", inventarioMain);

module.exports = router;
