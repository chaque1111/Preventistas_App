//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const {PrecargaClientes} = require("./src/controllers/clientes.js");
const {PrecargaInventario} = require("./src/controllers/inventario.js");
const {createVariable} = require("./src/controllers/transaccion.js");

const {conn} = require("./src/db.js");
const port = process.env.PORT || 3001;
// Syncing all the models at once.
conn.sync({force: true}).then(() => {
  server.listen(port, () => {
    PrecargaInventario();
    PrecargaClientes();
    createVariable();
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
