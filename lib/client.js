var rp = require('request-promise');
var errors = require('./errors');
var constants = require('./constants');

// default opts
/*
	{
		username: '',
		password: '',
		user_agent: ''
	}

*/

function R6Stats(opts) {
	this.options = opts;

	if (!this.options.hasOwnProperty('user_agent')) {
		throw new errors.MissingUserAgentError();
	}
}

var p = {};

p.authenticate = function () {
	var username = this.options.username, password = this.options.password;

	if (!(username && password)) {
		throw new errors.MissingCredentialsError();
	}

	var options = {
        method: 'POST',
        uri: constants.urls.api + constants.urls.authenticate,
        body: {
            "login": username,
            "password": password
        },
        json: true,
        headers: {
          "User-Agent": this.options.user_agent,
          "Content-Type": "application/json",
        }
    };

    return rp(options)
    	.then(function(res) {
    		var payload = res.payload;
    		console.log(payload)
    		var user = payload.user, token = payload.token;

    		if (token && user) {
    			this.user = user;
    			this.token = token;

    			return Promise.resolve(true);
    		} else {
    			throw new errors.AuthenticationError("user and token were not returned");
    		}

    	})
    	.catch(function(err) {
    		throw new errors.AuthenticationError(err);
    	});
}

p.services = {
    PlayerService: require('./services/players')
}

/*
    {
        path: '',
        method: 'GET',
        data: {}
    }
*/
p.request = function(opts) {
    var path = opts.path;
    delete opts.path;
    console.log(constants.urls.api)
    var uri = constants.urls.api + path;
    console.log(uri)
    var defaults = {
        method: "GET",
        json:  true,
        uri: uri,
        headers: {
            "User-Agent": this.options.user_agent,
            "Content-Type": "application/json"
        }
    };
    var options = Object.assign({}, defaults, opts);


    return rp(options);
}

R6Stats.prototype = p;

module.exports = R6Stats;