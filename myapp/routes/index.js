module.exports = function(io) {
	var express = require('express'),
		router = express.Router();

	router.get('/', function(req, res) {
		res.render('index', {

		});
	});

	io.on('connection', function(socket) {
		socket.on('init', function(data) {
			socket.on('disconnect', function() {
			});
		});
	});

	return router;
};
