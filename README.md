# Dansite Repo

Hi, this is a repository for my personal website - hosted using Azure Static Web Apps.

I am relatively new to web development (compared to other programming areas), so any suggestions/feedback would be greatly appreciated!

# Deployment

To deploy, simply merge/commit to the main branch - Azure will automatically start the deployment job.

# Local setup

## Ensure Node Version
check you have node 18.14.0 with `node -v`

## Install CLI
run `npm install -g @azure/static-web-apps-cli`

## Install azure function tools 
run `npm install -g azure-functions-core-tools@4 --unsafe-perm true`

# Debugging Locally

## To debug front-end locally:
1. run `npm run start`
2. go to "Run and Debug" in VSCode and select "Launch edge against local host"

## To debug both front-end and API locally (recommended):
1. run `npm run start`
2. run `swa start http://localhost:3000 --api-location api` in a new terminal
3. go to "Run and Debug" in VSCode and select "Launch edge against local host emulated by swa"

# Documentation

The main Docs I am presently using to guide development are:

- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/overview)
- [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react)
- [JavaScript Azure Functions Docs](https://learn.microsoft.com/en-gb/azure/azure-functions/functions-reference-node?tabs=javascript%2Clinux%2Cazure-cli&pivots=nodejs-model-v4)
- [Debugging with SWA](https://learn.microsoft.com/en-us/azure/static-web-apps/local-development)