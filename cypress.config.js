const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  watchForFileChanges: false,
  screenshotOnRunFailure: false,
  video: false, 
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/report/mochawesome-report',
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});