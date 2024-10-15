const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://google.com/',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    viewportHeight:563,
    viewportWidth:1030,
  },
});
