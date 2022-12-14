const {where} = require("sequelize");
const XLSX = require("xlsx");
const {Inventario} = require("../db");
const filename = "./Inventario.xlsx";

const ExcelToJsonInventario = () => {
  const excel = XLSX.readFile(filename);
  var Excel = excel.SheetNames;
  //  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]], jsonOpts)
  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]]);
  return datosFromJson;
};

const PrecargaInventario = async () => {
  const inventario = ExcelToJsonInventario();
  const productsFromBk = inventario.map((e) => {
    return {
      id: e["Código"].trim(),
      descripcion: e["Descripción"],
      rubro: e.Rubro,
      rubro2: e.Rubro2 ? e.Rubro2 : 0,
      porcentaje: e.Porcentaje,
      costo: e.Costo,
      unidadDeMedida: e.Unidiaddemedida ? e.Unidiaddemedida : null,
      stockActual: e.StockActual ? e.StockActual : null,
      tasaBonif: e.TasaBonif ? e.TasaBonif : null,
      costoBonif: e.CostoBonif ? e.CostoBonif : null,
      tiposStock: e.Tipostock ? e.Tipostock : false,
    };
  });
  await Inventario.bulkCreate(productsFromBk);
};

const getAllProducts = async (req, res) => {
  try {
    const {name} = req.query;
    const allProducts = await Inventario.findAll();
    if (name) {
      const productsByName = allProducts.filter((e) =>
        e.descripcion.toUpperCase().includes(name.toUpperCase())
      );
      productsByName.length
        ? res.status(200).json(productsByName)
        : res.status(300).send("Producto no encontrado");
    } else {
      const productsClean = allProducts.map((e) => {
        return {
          id: e.id,
          descripcion: e.descripcion,
          rubro: e.rubro,
          rubro2: e.rubro2,
          porcentaje: e.porcentaje,
          costo: e.costo,
          stockActual: e.stockActual,
        };
      });
      res.status(200).json(productsClean);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const products = await Inventario.findByPk(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  PrecargaInventario,
  getAllProducts,
  getProductById,
};
