// app/models/building.js

var restful = require('node-restful');
var mongoose = require('mongoose');

var buidlingSchema = new mongoose.Schema({
    name: String,
    description: String,
    basePopulation: Number,
    baseTourists: Number,
    baseIncome: Number,
    turnPopulation: Number,
    turnTourists: Number,
    turnIncome: Number,
    price: Number
});

// module.exports allows us to pass this to other files when it is called
module.exports = restful.model('Building', buildingSchema);
