require('dotenv').config()
import { defineConfig } from 'cypress';
import { removeUser } from './cypress/support/tasks/removeUser'

export default defineConfig({
  env: {
    API_URL: process.env.APP_API_URL
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { removeUser })
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: process.env.APP_WEB_URL
  },
});
