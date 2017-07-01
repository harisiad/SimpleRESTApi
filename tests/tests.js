/*jslint node: true*/

'use strict';

process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');

var Person = require('../models/person');

var chai = require('chai');

var chai_http = require('chai-http');
var api = require('../index');
var should = chai.should();

chai.use(chai_http);

describe('Person', () => {

    describe('/addUser', () => {
        it('it should create a new person', (done) => {
            var prson = {
                name: "tester1",
                gender: "M",
                age: 100,
                alive: true
            };

            chai.request(api).post('/addUser').send(prson).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be('object');
                res.body.should.have.property('name');
                res.body.should.have.property('gender');
                res.body.should.have.property('age');
                res.body.should.have.property('alive');
                done();
            });
        });
    });
});
