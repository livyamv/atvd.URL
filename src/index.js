const express = require("express"); //importar o express

//Define uma classe para organizar a lógica de aplicação
class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  routes() {
    const apiRoutes = require("./routes/apiRoutes");
    this.express.use("/project-senai/api/v1/", apiRoutes);

    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res) => {
      res.send({ status: "OK" });
    });
  }
}

module.exports = new AppController().express;
