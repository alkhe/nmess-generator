var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp');
var db = mongoose.connection;
db.on('error', function(err) {
	return console.log(err);
}).once('open', function() {
	// reset database
});
