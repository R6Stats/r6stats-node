# R6Stats API Client for NodeJS

This open-source library is provided by the R6Stats team as a means of accessing the public R6Stats web API.

## Installation

```bash
npm install @r6stats/node --save
```

## API Key

Although the R6Stats API is currently provided free of charge, we do require an API key to maintain access control. You can obtain an API key via our [Discord Server](https://discord.com/invite/pUdraS3) or via [support@r6stats.com](support@r6stats.com).

## Usage

### Version 3.x

```js
import R6StatsAPI from '@r6stats/node'

// create an instance of the API client
const api = new R6StatsAPI({ apiKey: 'xxx' })
```

```js
// valid platform options: pc, xbox, ps4

// get general stats (kills, deaths, etc.)
const player = await api.playerStats({ username: 'xxx', platform: 'pc' })
console.log(player.username, player.stats.general.kills)

// get operator stats
const player = await api.operatorStats({ username: 'xxx', platform: 'pc' })
console.log(player.username, player.operators[0].name, player.operators[0].kills)

// get weapon stats
const player = await api.weaponStats({ username: 'xxx', platform: 'pc' })
console.log(player.username, player.weapons[0].name, player.weapons[0].kills)

// get weapon category stats
const player = await api.weaponCategoryStats({ username: 'xxx', platform: 'pc' })
console.log(player.username, player.categories[0].category, player.categories[0].kills)
```

## License

See `LICENSE`

The R6Stats API Client library may be used in any project given that it does not directly compete with the R6Stats Website or its available applications. The client library is meant for individual usage only. Please direct all licensing questions to [support@r6stats.com](mailto:support@r6stats.com).
