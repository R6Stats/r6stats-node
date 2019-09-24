export interface PlayerAlias {
  username: string
  last_seen_at: string
}

export interface PlayerProgression {
  level: number
  lootbox_probability: number
  total_xp: number
}

export interface GeneralStats {
  assists: number
  barricades_deployed: number
  blind_kills: number
  bullets_fired: number
  bullets_hit: number
  dbnos: number
  deaths: number
  distance_travelled: number
  draws: number
  gadgets_destroyed: number
  games_played: number
  headshots: number
  kd: number
  kills: number
  losses: number
  melee_kills: number
  penetration_kills: number
  playtime: number
  rappel_breaches: number
  reinforcements_deployed: number
  revives: number
  suicides: number
  wins: number
  wl: number
}

export interface QueueStats {
  deaths: number
  draws: number
  games_played: number
  kd: number
  kills: number
  losses: number
  playtime: number
  wins: number
  wl: number
}

export interface GamemodeStats {
  best_score: number
  games_played: number
  losses: number
  playtime: number
  wins: number
  wl: number
}

export interface GamemodeBombStats extends GamemodeStats {
}

export interface GamemodeSecureAreaStats extends GamemodeStats {
  kills_as_attacker_in_objective: number
  kills_as_defender_in_objective: number
  times_objective_secured: number
}

export interface GamemodeHostageStats extends GamemodeStats {
  extractions_denied: number
}

export interface Timestamps {
  created: string
  last_updated: string
}

export interface OperatorAbility {
  ability: string
  value: number
}

export interface OperatorStat {
  name: string
  ctu: string
  role: string
  kills: number
  deaths: number
  kd: number
  wins: number
  losses: number
  wl: number
  headshots: number
  dbnos: number
  melee_kills: number
  experience: number
  playtime: number
  abilities: OperatorAbility[]
  badge_image: string
}

export interface WeaponStat {
  weapon: string
  category: string
  kills: number
  deaths: number
  kd: number
  headshots: number
  headshot_percentage: number
  times_chosen: number
  bullets_fired: number
  bullets_hit: number
  created: string
  last_updated: string
}

export interface WeaponCategoryStat {
  category: string
  kills: number
  deaths: number
  kd: number
  headshots: number
  headshot_percentage: number
  times_chosen: number
  bullets_fired: number
  bullets_hit: number
  created: string
  last_updated: string
}

export interface SeasonalStat {
  name: string
  start_date: string
  end_date?: string
  regions: {
    ncsa: SeasonRegionStat[]
    emea: SeasonRegionStat[]
    apac: SeasonRegionStat[]
  }
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
