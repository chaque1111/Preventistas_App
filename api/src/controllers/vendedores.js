const XLSX = require("xlsx");
const {Vendedor} = require("../db");
const filename = "./Vendedores.xlsx"


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
    const excel = XLSX.readFile(filename);
     var Excel = excel.SheetNames;
    //  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]], jsonOpts)
    let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]])
      
     return datosFromJson
}

const excelToJson = ExcelToJsonVendedores()

const PrecargaVendedores = async () => {
 const vendedores = excelToJson.map(e => {
   return {
     id: e.Código,
     name: e.Vendedores,
     comision: e.comision,
     limiteBonif: e.LimiteBonif >= 0 ? e.limiteBonif : 0,
     vendCom: e.VendCom === true ? true : false ,
     vendImp: e.VendImp === true ? true : false, 
     vendTipoCom: e.VendTipoCom ? e.VendTipoCom : 0,
     observ: e.Observ ? e.Observ : "not found",
     recibonroSUC: e.ReciboNroSuc ? e.ReciboNroSuc : "not found",
     recibonroDde: e.ReciboNroDde ? e.ReciboNroDde : "not found",
     recibonroHTA: e.ReciboNroHta ? e.ReciboNroHta : "not found"
   }
 })
 

 await Vendedor.bulkCreate(vendedores)
}


module.exports = {
  PrecargaVendedores
}
