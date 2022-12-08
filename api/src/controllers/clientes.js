const { DATE, where } = require("sequelize");
const XLSX = require("xlsx");
const {Cliente,Vendedor} = require("../db");
const { PrecargaVendedores } = require("./vendedores");

const FILE_CLIENTES = "./Clientes.xlsx"

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
    const excel = XLSX.readFile( FILE_CLIENTES , readOpts);
     var Excel = excel.SheetNames;
    //  let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]], jsonOpts)
    let datosFromJson = XLSX.utils.sheet_to_json(excel.Sheets[Excel[0]])
     return datosFromJson

}

const clientes = ExcelToJson();



const PrecargaClientes = async () => {
    try {
        PrecargaVendedores()
        const arrayC = clientes.map( e => {
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
                 fechaUC: e.FechaUC? e.FechaUC : new DATE,
                 fechaAlta: e.FechaAlta? e.FechaAlta : "not found",
                 leyF: e.LeyF ? e.LeyF : null,
                 leyR: e.LeyR ? e.LeyR : null,
                 actLista: e.ActLista!==false ? e.actLista : false,
                 email: e.email? e.email: "not found",
                 observaciones: e.Oservaciones? e.Oservaciones : "not found",
            }
        })

        await Cliente.bulkCreate(arrayC)
        let arreglo = await Cliente.findAll();

        for(let i=0; i<=arreglo.length; i++){
            let cliente = await Cliente.findOne({where:{ id: arreglo[i].id}});
            let vendedor = await Vendedor.findOne({where:{ name: arreglo[i].nombreVendedor}});
            // await Cliente.update({vendedorId: vendedor.id},
            //     {
            //         where:{id : cliente.id }
            //     })
            cliente.vendedorId = vendedor.id;
            await cliente.save()
           
        }
        

    } catch (e) {
        console.log(e)
    }
}

const getAllInfo = async () => {
    try {
         const clientesFromDb = await Cliente.findAll();
         console.log(clientesFromDb)
    } catch (e) {
        console.log(e)
    }
}








module.exports = {
    ExcelToJson,
    PrecargaClientes,
    getAllInfo
}