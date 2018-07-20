const search = ({ username, platform }) => ({
  method: 'get',
  url: `/player-search/${ username }/${ platform }`
})

export default { search }
