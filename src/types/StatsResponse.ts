import { GamemodeBombStats, GamemodeHostageStats, GamemodeSecureAreaStats, GeneralStats, OperatorStat, PlayerAlias, PlayerProgression, QueueStats, SeasonalStat, Timestamps, WeaponCategoryStat, WeaponStat } from './StatsData';

interface BaseResponse {
  username: string
  platform: string
  ubisoft_id: string
  uplay_id: string
  avatar_url_146: string
  avatar_url_256: string
  last_updated: string
}

export interface GenericStatsResponse extends BaseResponse {
  aliases: PlayerAlias[]
  progression: PlayerProgression
  stats: {
    general: GeneralStats
    queue: {
      casual: QueueStats
      ranked: QueueStats
      other: QueueStats
    }
    gamemode: {
      bomb: GamemodeBombStats
      secure_area: GamemodeSecureAreaStats
      hostage: GamemodeHostageStats
    }
  }
  timestamps: Timestamps
}

export interface OperatorStatsResponse extends BaseResponse {
  operators: OperatorStat[]
}

export interface WeaponStatsResponse extends BaseResponse {
  weapons: WeaponStat[]
}

export interface WeaponCategoryStatsResponse extends BaseResponse {
  categories: WeaponCategoryStat[]
}

export interface SeasonalStatsResponse extends BaseResponse {
  seasons: {
    [key: string]: SeasonalStat
  }
}
