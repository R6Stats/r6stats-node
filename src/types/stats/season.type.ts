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
  wins: number
  rank_text: string
  rank_image: string
}
