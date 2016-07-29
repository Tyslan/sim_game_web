// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Building = require('./../models/building');
var City = require('./../models/city');

Building.methods(['get', 'put', 'post', 'delete']);

Building.register(router, '/buildings');

City.methods(['get', 'put', 'post', 'delete']);

City.register(router, '/cities');

module.exports = router;
