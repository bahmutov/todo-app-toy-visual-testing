const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-toy-visual-testing
// configure the visual testing plugin

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    baseUrl: 'http://localhost:3777',
  },
})
