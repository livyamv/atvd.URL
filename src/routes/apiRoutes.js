const router = require("express").Router();

const numbersController = require("../controllers/controllersNumbers");

router.post("/numbers/", controllersNumbers.checkPar);
router.post("/numbersPrimos/", controllersNumbers.checkPrimo);

module.exports = router;
