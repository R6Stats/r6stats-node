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
