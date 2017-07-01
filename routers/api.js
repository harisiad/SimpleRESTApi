'use strict';

var express = require('express');

var routes = express.Router();

var Person = require('../models/person'); 

routes.get('/userList', function (req, res, next) {
    Person.find().then(function (people){
        res.send(people);
    });
});

routes.post('/addUser', function (req, res, next) {
    
    Person.create(req.body).then(function (person){
        res.send(person);
    }).catch(next);
});

routes.put('/updateUser/:id', function (req, res, next) {
    Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(function (person) {
        res.send(person);
    });
});

routes.delete('/deleteUser/:id', function (req, res, next) {
    Person.findByIdAndRemove({_id: req.params.id}).then(function (person) {
        res.send(person);
    });
});

module.exports = routes;
