# R6Stats API Client for NodeJS

[![Discord](https://discordapp.com/api/guilds/293848587391991836/embed.png)](https://discord.gg/pUdraS3)
[![npm (scoped)](https://img.shields.io/npm/v/@r6stats/node)](https://www.npmjs.com/package/@r6stats/node)
[![David](https://img.shields.io/david/r6stats/r6stats-node)](https://david-dm.org/r6stats/r6stats-node)

This open-source library is provided by the R6Stats team as a means of accessing the public R6Stats web API.

## Installation

```bash
npm install @r6stats/node --save
```

If you are using an older version of the R6Stats API (v2, currently v3), you'll need to install an older version of the library.

```bash
npm install @r6stats/node@3.0.7 --save
```

## API Key

Although the R6Stats API is currently provided free of charge, we do require an API key to maintain access control. You can obtain an API key via our [Discord Server](https://discord.com/invite/pUdraS3) or via [support@r6stats.com](support@r6stats.com).

## Usage

### Version 3.x

```ts
import R6StatsAPI from '@r6stats/node'

// create an instance of the API client
const api = new R6StatsAPI({ apiKey: 'xxx' })
```

```ts
// valid platform options: pc, xbox, ps4

// get general stats (kills, deaths, etc.)
const { data: player } = await api.playerStats('KingGeorge', 'pc')
console.log(player.username, player.stats.general.kills)

// get operator stats
const { data: player } = await api.operatorStats('KingGeorge', 'pc')
console.log(player.username, player.operators[0].name, player.operators[0].kills)

// get weapon stats
const { data: player } = await api.weaponStats('KingGeorge', 'pc')
console.log(player.username, player.weapons[0].name, player.weapons[0].kills)

// get weapon category stats
const { data: player } = await api.weaponCategoryStats('KingGeorge', 'pc')
console.log(player.username, player.categories[0].category, player.categories[0].kills)

// get seasonal stats
const { data: player } = await api.seasonalStats('KingGeorge', 'pc')
// log latest season name and number of wins in the american region
console.log(player.username, player.seasons[0].name, player.seasons[0].regions.ncsa[0].wins)
```

## License

See `LICENSE`

The R6Stats API Client library may be used in any project given that it does not directly compete with the R6Stats Website or its available applications. The client library is meant for individual usage only. Please direct all licensing questions to [support@r6stats.com](mailto:support@r6stats.com).

R6Stats is a fan-made project and is not affiliated with Ubisoft. Tom Clancy’s, Rainbow Six, The Soldier Icon, Ubisoft and the Ubisoft logo are trademarks of Ubisoft Entertainment. Google Play and the Google Play logo are trademarks of Google LLC. Apple and the Apple Logo are trademarks of Apple Inc. App Store is a service mark of Apple Inc.
