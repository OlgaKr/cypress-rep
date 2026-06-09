const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 6000,
    video: true,               
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});