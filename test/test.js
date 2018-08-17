const resolve = require('path').resolve
const process = require('process')
const assert = require('chai').assert
require('dotenv').config({ path: resolve(process.cwd(), '.env.testing') })

import R6StatsAPI from './src/R6StatsAPI'

test('client cannot authenticate without user agent', () => {
  const { R6STATS_LOGIN, R6STATS_PASSWORD } = process.env
  assert.throw(new R6StatsAPI({ loginId: R6STATS_LOGIN, password: R6STATS_PASSWORD, userAgent: null }))
})
