const { DATE } = require("sequelize");
const XLSX = require("xlsx");
const {Cliente} = require("../db");
const filename = "D:\\Henry\\Marinaro\\Preventistas_App\\api\\Clientes.xlsx"
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

const ExcelToJson = () => {
    const excel = XLSX.readFile( filename , readOpts);
     var Excel = excel.SheetNames;
    //  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]], jsonOpts)
    let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]])
    console.log(datosFromJson)
     return datosFromJson

}

const clientes = ExcelToJson()

const PrecargaClientes = async () => {
    try {
        const arrayC = clientes.map(e => {
      
            return {
                 id: e.Codigo,
                 name: e.NomFant? e.NomFant : "not found",
                 rzsocial: e.RzSocial? e.RzSocial : "not found",
                 direccion: e["Dirección"],
                 localidad: e.Localidad,
                 provincia: e.Provincia,
                 pais: e.País,
                 zona: e["CódigoPostal"]? e["CódigoPostal"]: "not found",
                 whatsapp: e.Tel? e.Tel : "not found",
                 tipoDocumento: e["Tipo de Documento"]? e["Tipo de Documento"] : "not found",
                 numDocument: e["Número"]? e["Número"] : "not found" ,
                 condicionIva: e["Condición Frente al IVA"],
                 categoria: e["Categoría"]? e["Categoría"]: "not found",
                 nombreVendedor: e.Vendedor,
                 saldo: e.Saldo,
                 observaciones: e.Oservaciones? e.Oservaciones : "not found",
                 contacto: e.Contacto? e.Contacto : "not found",
                 listaPrecios: e.ListaPrecios? e.ListaPrecios : "not found",
                 condVta: e.CondVta,
                 credito: e.Credito,
                 bonif: e.Bonif,
                 abasto: e.Abasto,
                 percIBTasa: e.PercIBTasa,
                 activo: e.Activo,
                 fechaUC: e.FechaUC ? e.FechaUC : new DATE,
                //  leyF: e.LeyF ? e.LeyF : null,
                //  leyR: e.LeyR ? e.LeyR : null,
                //  actLista: e.ActLista? e.actLista : "not found",
                //  email: e.email? e.email: null,
            }
        })

        await Cliente.bulkCreate(arrayC)
        
    } catch (e) {
        console.log(e)
    }
}
 PrecargaClientes()
// ExcelToJson()

module.exports = {
    ExcelToJson,
    PrecargaClientes
}