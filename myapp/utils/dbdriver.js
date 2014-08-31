var mongoose = require('mongoose');

module.exports = function(database, callback) {
	var uri = 'mongodb://localhost/' + database;
	mongoose.connect(uri);
	mongoose.connection.once('open', callback).on('error', callback);
};
