var db = require('../utils/dbmodel');

module.exports = {
	getEntity: function(condition, callback) {
		db.Entity.find(condition, callback);
	},
	createEntity: function(document, callback) {
		new db.Entity(document).save(callback);
	},
	updateEntity: function(condition, document, options, callback) {
		db.Entity.update(condition, document, options, callback);
	},
	removeEntity: function(condition, callback) {
		db.Entity.find(condition).remove(callback);
	}
}
