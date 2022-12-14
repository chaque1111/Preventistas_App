const {Transaccion, Vendedor, Cliente, Inventario} = require("../db");

const createTransaction = async (req, res) => {
  try {
    const {
      vendedorId,
      clienteId,
      inventarioId,
      descripcion,
      costo,
      cantidad,
      subTotal,
      fecha,
      observacion,
    } = req.body;

    console.log(vendedorId);
    const transaccion = await Transaccion.create({
      vendedorId,
      clienteId,
      inventarioId,
      descripcion,
      costo,
      cantidad,
      subTotal,
      fecha,
      observacion,
    });
    res.status(200).json(transaccion);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  createTransaction,
};
