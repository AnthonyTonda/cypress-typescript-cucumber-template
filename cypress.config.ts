import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      webpack({
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                  {
                    loader: "ts-loader",
                  },
                ],
              },
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      })
  );

  const environmentName = config.env.configFile || 'qa'
  const environmentFilename = `./cypress/config/${environmentName}.json`
  const settings = require(environmentFilename)

  if (settings.env) {
    config.env = {
      ...config.env,
      ...settings.env,
    }
  }

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  screenshotsFolder: 'mochawesome-report/assets',
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  pageLoadTimeout: 60000,
  projectId: 'cypress_typescript_cucumber_template',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/config/reporter-config.json'
  },
  e2e: {
    supportFile: 'cypress/support/commands.ts',
    specPattern: 'cypress/e2e/**//*.{js,jsx,ts,tsx,feature}',
    excludeSpecPattern: 'cypress/e2e/features/**/*.ts',
    experimentalWebKitSupport: true,
    setupNodeEvents,
  },
});
