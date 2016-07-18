// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Building = require('./../models/building');

Building.methods(['get', 'put', 'post', 'delete']);

Building.register(router, '/buildings');

module.exports = router;
