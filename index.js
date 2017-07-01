/*jslint node: true*/

'use strict';

var express = require('express');
var router = require('./routers/api');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/personApi');
mongoose.Promise = global.Promise;

var app = express();

app.use(bodyParser.json());

app.use(router);

app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({
        error: err.message
    });
});


app.listen(4000, function (){
    console.log("Listening on port 4000");
});