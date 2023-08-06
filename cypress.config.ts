import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/vanillajs/',
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
