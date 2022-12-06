const { DataTypes, UUID, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cliente', {
    id: {
      type: DataTypes.INTEGER,
      
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rzsocial:{ 
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zona: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deudas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
   tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numDocument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condicionIva: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombreVendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true,
      defaultValue: null,
    },
   
    contacto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    listaPrecios: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    condVta: {
    type: DataTypes.STRING,
    allowNull: true
   },
   credito: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bonif: {
          type: DataTypes.STRING,
     allowNull: true,
   },
   abasto: {
       type: DataTypes.BOOLEAN,
       allowNull: true
     },
     percIBTasa: {
         type: DataTypes.DECIMAL(4,2),
         allowNull: true
        },
         activo: {
             type: DataTypes.BOOLEAN,
             allowNull: false,
             defaultValue: true,
           },
        fechaUC:{
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
       LeyF: {
             type: DataTypes.STRING,
             allowNull: true,
         },
         LeyR: {
               type: DataTypes.STRING,
               allowNull: true,
           },
               actLista: {
                   type: DataTypes.BOOLEAN,
                   allowNull: false,
                   defaultValue: true
                 },
                 email: {
                     type: DataTypes.STRING,
                     allowNull: true,
                    },
                    fechaAlta:{
                      type: DataTypes.DATEONLY,
                      allowNull: true
                     },
                  observaciones: {
                    type: DataTypes.STRING(1200),
                    allowNull: true
                  },
                  //  web: {
                    //   type: DataTypes.STRING,
                    //   allowNull: true,
                    // },
    // llamar: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // pasar: {
        //   type: DataTypes.STRING,
        //   allowNull: true,
        // },
        // observCobranza:{
          //   type: DataTypes.STRING,
          //   allowNull: true,
          // },
  //  fechaRepos: {
    //    type: DataTypes.STRING,
    //    allowNull: true,
    //  },
    //  nroProv: {
      //    type: DataTypes.STRING,
      //    allowNull: true,
      //  },
      //  lugarEntrega:{
        //    type: DataTypes.STRING,
        //    allowNull: true,
        //  }
      },{timestamps:false});
    };
    