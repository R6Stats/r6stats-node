import babel from 'rollup-plugin-babel'

export default {
  input: 'src/R6StatsAPI.js',
  output: {
    file: 'dist/R6StatsAPI.js',
    name: 'R6StatsAPI',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['axios']
}
