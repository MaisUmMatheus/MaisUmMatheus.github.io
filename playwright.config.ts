import { defineConfig, devices } from '@playwright/test';

const URL = 'http://localhost:4173';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: URL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'celular', use: { ...devices['Pixel 7'] } },
  ],
  // Testa o site já compilado, igual ao que vai para o ar.
  webServer: {
    command: 'npm run preview',
    url: URL,
    reuseExistingServer: !process.env.CI,
  },
});
