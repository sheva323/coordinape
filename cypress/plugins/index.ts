/// <reference types="cypress" />
// ***********************************************************
// https://on.cypress.io/plugins-guide
// ***********************************************************
import dotenvPlugin from 'cypress-dotenv';
import ddPlugin from 'dd-trace/ci/cypress/plugin';

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  ddPlugin(on, config);

  config = dotenvPlugin(config, { debug: true }, true);
  if (config.env.CI || process.env.CI) {
    config.baseUrl = 'http://localhost:' + config.env.CI_WEB_PORT;
  } else {
    config.baseUrl = 'http://localhost:' + config.env.LOCAL_WEB_PORT;
  }
  return config;
};
