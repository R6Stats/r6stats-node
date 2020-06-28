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
