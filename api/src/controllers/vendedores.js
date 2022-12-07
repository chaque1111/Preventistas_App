const XLSX = require("xlsx");
const {Vendedor} = require("../db");
const filename = "C:\\Users\\alex\\Documents\\Henry\\PreventistasApp\\PreventistasApp\\api\\Vendedores.xlsx"


const readOpts = { // <--- need these settings in readFile options
    cellText:false, 
    cellDates:true
  };
  const jsonOpts = {
    header: 1,
    defval: '',
    blankrows: true,
    raw: false,
    dateNF: 'd"/"m"/"yyyy' // <--- need dateNF in sheet_to_json options (note the escape chars)
  }




  const ExcelToJsonVendedores =  () => {
    const excel = XLSX.readFile("C:\\Users\\alex\\Documents\\Henry\\PreventistasApp\\PreventistasApp\\api\\Vendedores.xlsx");
     var Excel = excel.SheetNames;
    //  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]], jsonOpts)
    let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]])
      console.log(datosFromJson)
     return datosFromJson
}

const excelToJson = ExcelToJsonVendedores()

const PrecargaVendedores = async () => {
 const vendedores = excelToJson.map(e => {
   return {
     id: e.Código,
     name: e.Vendedores,
     comision: e.comision,
   }
 })

 await Vendedor.bulkCreate(vendedores)
}


module.exports = {
  PrecargaVendedores
}
