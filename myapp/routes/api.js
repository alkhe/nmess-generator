var express = require('express'),
	router = express.Router(),
	control = require('../utils/controller'),
	api = {
		all: function(req, res, next) {
			console.log(req.method, req.params, req.body, req.query);
			next();
		},
		get: function(req, res) {
			control.getEntity({

			}, function(err, ents) {
				res.status(200).send(ents);
			});
		},
		post: function(req, res) {
			control.createEntity({

			}, function(err, ents) {
				res.status(200).send(ents);
			});
		},
		put: function(req, res) {
			control.updateEntity({

			}, {

			}, {
				upsert: true
			}, function(err, affected, ents) {
				res.status(200).send(ents);
			});
		},
		delete: function(req, res) {
			control.removeEntity({

			}, function(err, ents) {
				res.status(204).send(ents);
			});
		},
		merge: function(req, res) {
			res.status(200).send('OK');
		},
		patch: function(req, res) {
			res.status(200).send('OK');
		},
		copy: function(req, res) {
			res.status(200).send('OK');
		},
		head: function(req, res) {
			res.status(200).send('OK');
		},
		options: function(req, res) {
			res.status(200).send('OK');
		},
		purge: function(req, res) {
			res.status(200).send('OK');
		},
		lock: function(req, res) {
			res.status(200).send('OK');
		},
		unlock: function(req, res) {
			res.status(200).send('OK');
		},
		propfind: function(req, res) {
			res.status(200).send('OK');
		}
	};

router
	.all('/', api.all)
	.get('/', api.get)
	.post('/', api.post)
	.put('/', api.put)
	.delete('/', api.delete)
	/*
	.merge('/', api.merge)
	.patch('/', api.patch)
	.copy('/', api.copy)
	.head('/', api.head)
	.unlock('/', api.unlock)
	.options('/', api.options)
	.purge('/', api.purge)
	.lock('/', api.lock)
	.propfind('/', api.propfind)
	*/
	;

module.exports = router;
