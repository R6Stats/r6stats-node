# R6Stats API Client for NodeJS

This open-source library is provided by the R6Stats team as a means of accessing the R6Stats web API. 

Documentation of the API is available at [dev.r6stats.com](https://dev.r6stats.com). All API support requests should be directed towards our other support channels. This Github repository is for content relating directly to the R6Stats NodeJS client library itself.

## Installation

```bash
npm install r6stats --save
```

## Usage

Simple usage:

```js
var R6Stats = require('r6stats');
var client = new R6Stats({
	username: 'LordChanka',
	password: 'IsTheGreatest',
	user_agent: 'R6Stats Node API Test Application'
});
client.authenticate();

client.request('stats/uplay/LordChanka')
	.then(function(player) {
		console.log(player);
	});
```

Using service helpers:

```js
...
client.authenticate();
var players = new client.services.PlayerService(client);
players.getPlayer('LordChanka', 'uplay')
	.then(function(player) {
		console.log('Player: ', player);
		players.getOperators('LordChanka', 'uplay')
			.then(function(operators) {
				console.log('Operators: ', operators);
			});
	})
	.catch(function(err) {
		console.log('An error occured!', err);
	});
```

## License

See `LICENSE`

The R6Stats API Client library may be used in any project given that it does not directly compete with the R6Stats Website or it's available applications. The client library is meant for individual usage only. Please direct all licensing questions to [support@r6stats.com](mailto:support@r6stats.com).
