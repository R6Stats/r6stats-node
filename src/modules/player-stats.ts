import { Platform } from '../types/stats/meta.type'

export const playerStats = (username: string, platform: Platform) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/generic`
})

export const operatorStats = (username: string, platform: Platform) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/operators`
})

export const seasonalStats = (username: string, platform: Platform) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/seasonal`
})

export const weaponStats = (username: string, platform: Platform) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/weapons`
})

export const weaponCategoryStats = (username: string, platform: Platform) => ({
  method: 'get',
  url: `/stats/${username}/${platform}/weapon-categories`
})
