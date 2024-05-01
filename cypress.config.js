const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-toy-visual-testing
const {
  setupVisualTesting,
} = require('@bahmutov/cypress-toy-visual-testing/dist/plugin/setup')

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      setupVisualTesting(on, config)
      return config
    },
    baseUrl: 'http://localhost:3777',
  },
})
