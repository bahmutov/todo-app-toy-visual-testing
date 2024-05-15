const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-toy-visual-testing
const {
  setupVisualTesting,
} = require('@bahmutov/cypress-toy-visual-testing/dist/plugin/setup')

module.exports = defineConfig({
  projectId: '8ho7dz',
  fixturesFolder: false,
  e2e: {
    env: {
      resolution: 'high',
    },
    setupNodeEvents(on, config) {
      setupVisualTesting(on, config)

      // https://github.com/bahmutov/cypress-high-resolution
      // require('cypress-high-resolution')(on, config)

      return config
    },
    baseUrl: 'http://localhost:3777',
  },
})
