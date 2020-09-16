var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

router.get('/',bicicletaController.bicicleta_List);

module.exports = router;