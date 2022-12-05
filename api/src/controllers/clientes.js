const XLSX = require("xlsx");
const {Cliente} = require("../db");


const ExcelToJson = () => {
    const excel = XLSX.readFile(
     "C:\\Users\\alex\\Documents\\Henry\\PreventistasApp\\PreventistasApp\\api\\Clientes.xlsx"
     );
     var Excel = excel.SheetNames;
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
                 contacto: e.Contacto? e.Contacto : "not found",
                 listaPrecios: e.ListaPrecios? e.ListaPrecios : "not found",
                 condVta: e.CondVta? e.CondVta : "not found",
                 bonif: e.Bonif ? e.Bonif: "not found",
                 credito: e.Credito>=0  ? e.Credito: "not found",
                 abasto: e.Abasto===true? e.Abasto : false,
                 percIBTasa: e.PercIBTasa>0? e.PercIBTasa : e.PercIBTasa,
                 activo: e.Activo===true? e.Activo : false,
                 fechaUC: e.FechaUC? e.FechaUC : "not found",
                //  fechaAlta: e.FechaAlta? FechaAlta : "not found",
                 leyF: e.LeyF ? e.LeyF : null,
                 leyR: e.LeyR ? e.LeyR : null,
                 actLista: e.ActLista!==false ? e.actLista : false,
                 email: e.email? e.email: "not found",
                 observaciones: e.Oservaciones? e.Oservaciones : "not found",
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