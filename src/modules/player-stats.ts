import { StatsLookup } from '../types/stats-request.type'

export const playerStats = ({ username, platform }: StatsLookup) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/generic`
})

export const operatorStats = ({ username, platform }: StatsLookup) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/operators`
})

export const seasonalStats = ({ username, platform }: StatsLookup) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/seasonal`
})

export const weaponStats = ({ username, platform }: StatsLookup) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/weapons`
})

export const weaponCategoryStats = ({ username, platform }: StatsLookup) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/weapon-categories`
})
