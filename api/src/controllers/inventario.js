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
      id: e["Código"],
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
  console.log(productsFromBk);
};

module.exports = {
  PrecargaInventario,
};
