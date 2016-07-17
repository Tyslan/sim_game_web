// config/db.js
var connectionString = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sim-game';

module.exports = {
    url : connectionString
};
