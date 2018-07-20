const playerStats = ({ uuid }) => ({
  method: 'get',
  url: `/stats/${ uuid }`
})

const operatorStats = ({ uuid }) => ({
  method: 'get',
  url: `/stats/${ uuid }/operators`
})

const seasonalStats = ({ uuid }) => ({
  method: 'get',
  url: `/stats/${ uuid }/seasonal`
})

export default { playerStats, operatorStats, seasonalStats }
