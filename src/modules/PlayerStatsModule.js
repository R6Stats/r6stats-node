class PlayerStatsModule {

  constructor (R6StatsAPI) {
    this._R6Stats = R6StatsAPI
  }

  stats (uuid) {
    return this._R6Stats.call({
      method: 'get',
      url: `/stats/${ uuid }`
    })
  }

}

export default PlayerStatsModule
