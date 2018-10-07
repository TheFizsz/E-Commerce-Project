var express = require("express");  //Initialzie express module
var router = express.Router();  


router.get('/', function(req, res){

    res.send('IT WORKS')

});

/* */ 

module.exports = router;