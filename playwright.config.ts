import { defineConfig, } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/*.spec.ts"],
  
  use: {
    headless: false,
    trace: "on",
    video: "on",
    screenshot: "on"
  },

  reporter: [
    ['html'],
    //['junit'],
    //['json']
  ],
});
