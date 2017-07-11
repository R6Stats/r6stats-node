var errors = require('../errors');
var constants = require('../constants');

function PlayerService(client) {
	this.client = client;
}

var p = {};

p.getPlayer = function(username, platform) {
	username = encodeURIComponent(username);
	var path = constants.urls.players.format(username, platform);
	console.log(path)

	return this.client.request({path: path})
		.then(function(res) {
			return Promise.resolve(res.player);
		})
		.catch(function(err) {
			throw new errors.ServiceResponseError(err);
		});

}

p.getOperators = function(username, platform) {
	username = encodeURIComponent(username);
	var path = constants.urls.operators.format(username, platform);

	return this.client.request({path: path})
		.then(function(res) {
			return Promise.resolve(res.operator_records);
		})
		.catch(function(err) {
			throw new errors.ServiceResponseError(err);
		});
}

PlayerService.prototype = p;

module.exports = PlayerService;