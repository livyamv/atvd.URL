// Router será utilizado para definir rotas específicas da aplicação
const router = require("express").Router();

const controllersNumbers = require("../controllers/controllersNumbers");
// Importa a controller onde contém a logica dos numbers
const numbersController = require("../controllers/controllersNumbers");

router.post("/numbers/", controllersNumbers.checkPar);
router.post("/numbersPrimos/", controllersNumbers.checkPrimo);

module.exports = router;
