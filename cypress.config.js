const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: process.env.CYPRESS_SPEC_PATTERN || 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
