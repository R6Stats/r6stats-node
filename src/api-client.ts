import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { operatorStats, playerStats, seasonalStats, weaponCategoryStats, weaponStats } from './modules/player-stats'
import { GenericStatsResponse, OperatorStatsResponse, SeasonalStatsResponse, WeaponCategoryStatsResponse, WeaponStatsResponse, APIResponse } from './types'
import { R6StatsAPIConfiguration } from './types/api-config.type'
import { Platform } from './types/stats/meta.type'

const DEFAULT_OPTIONS = {
  baseUrl: 'https://api.r6stats.com/public-api',
  userAgent: 'R6Stats API Application',
}

export class R6StatsAPI {
  private $axios: AxiosInstance
  private config: R6StatsAPIConfiguration

  constructor (config: R6StatsAPIConfiguration) {
    this.config = Object.assign({}, DEFAULT_OPTIONS, config)

    this.$axios = axios.create(this.getBaseConfig(this.config))
  }

  private async call <T, R = APIResponse<T>>(opts: Object): Promise<R> {
    return this.$axios(opts).then(resp => resp.data)
  }

  public async playerStats (username: string, platform: Platform): Promise<APIResponse<GenericStatsResponse>> {
    return this.call<GenericStatsResponse>(playerStats(username, platform))
  }

  public async operatorStats (username: string, platform: Platform): Promise<APIResponse<OperatorStatsResponse>> {
    return this.call<OperatorStatsResponse>(operatorStats(username, platform))
  }

  public async seasonalStats (username: string, platform: Platform): Promise<APIResponse<SeasonalStatsResponse>> {
    return this.call<SeasonalStatsResponse>(seasonalStats(username, platform))
  }

  public async weaponStats (username: string, platform: Platform): Promise<APIResponse<WeaponStatsResponse>> {
    return this.call<WeaponStatsResponse>(weaponStats(username, platform))
  }

  public async weaponCategoryStats (username: string, platform: Platform): Promise<APIResponse<WeaponCategoryStatsResponse>> {
    return this.call<WeaponCategoryStatsResponse>(weaponCategoryStats(username, platform))
  }

  private getBaseConfig (config: R6StatsAPIConfiguration): AxiosRequestConfig {
    return {
      baseURL: config.baseUrl,
      headers: {
        'User-Agent': config.userAgent,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
      },
    }
  }
}
