export interface SeasonalStat {
  name: string
  season: number
  primary_color: string
  start_date: string
  end_date?: string
  ranks: SeasonRank[]
  regions: {
    ncsa: SeasonRegionStat[]
    emea: SeasonRegionStat[]
    apac: SeasonRegionStat[]
  }
}

export interface SeasonRank {
  name: string
  rank: number
  path: string
  champions: boolean
}

export interface SeasonRegionStat {
  region: string
  abandons: number
  losses: number
  max_mmr: number
  max_rank: number
  mmr: number
  next_rank_mmr: number
  prev_rank_mmr: number
  rank: number
  skill_mean: number
  skill_standard_deviation: number
  created_for_date: string
  updated_at: string
  wins: number
  kills: number
  deaths: number
  last_match_mmr_change: number
  last_match_skill_mean_change: number
  last_match_skill_standard_deviation_change: number
  champions_rank_position: number
}
