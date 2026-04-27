const { defineConfig } = require("cypress");

const mochawesome = require("cypress-mochawesome-reporter/plugin");

const environments = {
  prod: {
    baseUrl:  "https://guest:welcome2qauto@qauto.forstudy.space/",
    email:    "olgaproduser@qauto.ua",
    password: "Password123",
  },

  buggy: {
    baseUrl:  "https://guest:welcome2qauto@qauto2.forstudy.space/",
    email:    "olgatestuser@qauto.ua",
    password: "Password123",
  },
};

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 6000,
  video: true,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
  charts: true,
  reportPageTitle: "Cypress report",
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
},

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
      const envName = config.env.environment || "prod";
      const selectedEnv = environments[envName];

      config.baseUrl = selectedEnv.baseUrl;
      config.env.email = selectedEnv.email;
      config.env.password = selectedEnv.password;

      return config;
    },
  },
});