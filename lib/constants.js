var api = 'https://api.r6stats.com/api/v1/'

module.exports = {
	urls: {
		api: api,
		players: 'players/{0}?platform={1}',
		operators: 'players/{0}/operators?platform={1}',
		authenticate: 'users/authenticate'
	}
}