// app/models/building.js

var restful = require('node-restful');
var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    population: Number,
    tourists: Number,
    money: Number,
    incomeNextTurn: Number,
});

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('City', citySchema);
