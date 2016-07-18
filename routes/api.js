// Dependencies
var express = require('express');
var router = express.Router();

// Models
// Models
var Building = require('./../models/building');

Building.methods(['get', 'put', 'post', 'delete']);

module.exports = router;
