# cypress-template

Example of project with Cypress.

Travis CI build results:

[![Build Status](https://travis-ci.org/estefafdez/cypress-template.svg?branch=main)](https://travis-ci.org/estefafdez/cypress-template)

Github Actions build results:

![End-to-end tests with Cypress](https://github.com/estefafdez/cypress-template/workflows/End-to-end%20tests%20with%20Cypress/badge.svg)

## SonarCloud analysis:

https://sonarcloud.io/dashboard?id=estefafdez_cypress-template

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=estefafdez_cypress-template&metric=alert_status)](https://sonarcloud.io/dashboard?id=estefafdez_cypress-template)

## Test Plan of this project.

Every test plan defined for this project will be added into the Qase tool.

If you want to collaborate with it, please add a PR to the repo. Thanks!

[1. API Tests Test Plan](https://app.qase.io/project/CYEX)

[2. Web Tests Test Plan](https://app.qase.io/project/CYEX)

## Cypress Dashboard access.

If you want to have a look at this project on Cypress Dashboard please visit the following link:

https://dashboard.cypress.io/projects/iyhpy5/

## QaJenkins + Xray



```
        stage('XRay') {
            when { 
                expression {
                    return params.RESULTS_TO_XRAY
                }
            }
            steps {
                step([
                    $class: 'XrayImportBuilder',
                    endpointName: '/junit',
                    importFilePath: 'cypress/results/test-results-*.xml',
                    importToSameExecution: 'true',
                    projectKey: 'AS',
                    testPlanKey: 'AS-4401',
                    serverInstance: 'CLOUD-cb9a5332-2ec6-4e45-b5da-79bf84ed2588',
                    testEnvironments: 'AutoStats' + env.ENV.capitalize()
                ])
            }
        }

```
## Prerequisites

% nvm i --lts
Installing latest LTS version.
v18.16.0 is already installed.
Now using node v18.16.0 (npm v9.5.1)

