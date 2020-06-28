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

export interface Timestamps {
  created: string
  last_updated: string
}
