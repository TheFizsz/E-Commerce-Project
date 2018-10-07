//Import Modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Set routes
var index = require('../server/routes/index');
var users = require('../server/routes/users');
var catalog = require('../server/routes/catalog');

var port = 3001;
var app = express();

//View Engine with HTML ext
app.set('views', path.join(__dirname, 'dist'));  //set views folder
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//Set Static Public and Client Folder
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'client')))

//Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

//Establish routes
app.use('/', index)
app.use('/users', users)
app.use('/catalog', catalog)

//Answer all requests in the app
app.get('*', (req, res)=>{
   
    //Send file to index in dist folder
   res.sendFile(path.join(_dirname, 'dist/index.html')) 
})

app.listen(port, function(){

    console.log('Server started on ' + port)

})
