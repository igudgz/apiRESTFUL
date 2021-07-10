const { mongooConnect } = require("./infaestrutura/connection");
const customExpress = require("./config/customExpress");
const Tables = require("./infaestrutura/tables");

mongooConnect
  .then((result) => {
    const app = customExpress();
    Tables.init(mongooConnect);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
