# Scaffolding Application

A simple scaffold application for showing authorization and authentication.

## What's included
- `axios` - Promise based HTTP client for the browser and node.js
- `vue` - Progressive framework for building user interfaces
- `vue-router` - Official router for Vue.js
- `vuelidate` - Model validation library
- `vuetify` - Material design framework
- `vuex` - sState management pattern + library for Vue.js applications, centralized store
- `jest|supertest` - Testing framework
## What does it do
Scaffold a deployable UI app with basic features for future projects.

## Features:
- Login
- Registration
- Logout
- Redirects
- Mock API calls
- Database migration and seeding
- JWT authentication
- Gated routes
- Deployable to GitHub Pages using recipie
- Unit/E2E tests stubbed

## Recipes

### Getting started
- Clone this repo: `git clone git@github.com:chrizzis/vue-vuetify-vuex-router-axios-vuelidate-seed.git MY-NEW-REPO`
- `cd MY-NEW-REPO`
- Rename project in `package.json`
- Remove `.env` from commit history and commit changes
- Modify `.env` variables if needed
- `yarn install` to install required packages
- `yarn serve:mock` - compiles and hot-reloads for development, with mocked api calls
- Can also serve with unmocked api calls with local server `node-express-pg-vue-seed` listening on `VUE_APP_API_URL`:
  - `yarn serve`
- Point to `localhost:PORT/` to manually test the app

### Compiles and minifies for production
- `yarn build`
- Compile to local server for local development
  - comment out redirect script required for github pages in `public/index.html`
  - NOTE: `.env` `VUE_APP_API_URL` is set to local server address, it is overridden in `yarn build:lseed` command
  - `yarn build:lseed` - change `--dest ../MY-SERVER-REPO/public`
- Compile to server for Heroku deployment
  - comment out redirect script required for github pages in `public/index.html`
  - NOTE: `.env` `VUE_APP_API_URL` is set to local server address, it is overridden in `yarn build:sseed` command
  - `yarn build:sseed` - change `--dest ../MY-SERVER-REPO/public`

### Lints and fixes files
- `yarn lint`

### Testing
- `yarn test:unit`
- `yarn test:e2e`

### Deploy to Github
- `public/index.html` - uncomment redirect script
- set `.env` `VUE_APP_GITHUB_REPO` to github repo name
- set `.env` `VUE_APP_API_URL` to heroku OR localhost app api path
  - TODO: `yarn deploy` command should accept a `VUE_APP_API_URL` param to prevent altering `.env` file
- ensure `gh-pages` branch is on github
- set up github page using `gh-pages` branch
- ensure `deploy.sh` `git push -f git@github.com:chrizzis/GITHUB-REPO.git master|MAIN?:gh-pages` is correct
  - pushing to correct PUBLIC github repo `GITHUB-REPO`
  - pushing from correct branch (git defaults to master, but github has a process to remove master, curretly not working)
- `yarn deploy`
### config: modified from `https://github.com/rafgraph/spa-github-pages`
- create `gh-pages` branch and set up page in GitHub
- `deploy.sh` (remember to set correct master|main|gh-pages branches and repo)
- `public/404.html`
- `public/index.html` - uncomment redirect script
- `vue.config.js`:`publicPath` (sets public path to github repo name)
- `package.json`:`yarn deploy`
- `.env`:`APP_BASE_URL` - TODO: (not implemented) can be set to localhost to test localserver|remoteclient integration

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
