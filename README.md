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
  - NOTE: `.env` `VUE_APP_API_URL` is set to local server address
  - `yarn build:lseed` - change `--dest ../MY-SERVER-REPO/public`
- Compile to server for Heroku deployment
  - comment out redirect script required for github pages in `public/index.html`
  - NOTE: `.env` `VUE_APP_API_URL` is set to local server address
  - `yarn build:sseed` - change `--dest ../MY-SERVER-REPO/public`

### Lints and fixes files
- `yarn lint`

### Testing
- `yarn test:unit`
- `yarn test:e2e`

### Deploy to Github
### config: modified from `https://github.com/rafgraph/spa-github-pages`
- create `gh-pages` branch and set up page in GitHub
- `deploy.sh` (remember to set correct master|main|gh-pages branches and repo)
- `public/404.html`
- `public/index.html` - uncomment redirect script
- `vue.config.js`:`publicPath` (set repo)
- `package.json`:`yarn deploy`
- `.env`:`APP_BASE_URL` - TODO: (not implemented) can be set to localhost to test localserver|remoteclient integration
```
yarn deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
