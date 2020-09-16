var Bicicleta = require('../models/bicicleta');

exports.bicicleta_List = function(req,res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}