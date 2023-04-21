import { defineConfig } from '@playwright/test';

export default defineConfig({
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: 'tests',

    // Run all tests in parallel.
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: 'html',

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://127.0.0.1:3000',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',
    },
    // Configure projects for major browsers.
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    // Run your local dev server before starting the tests.
    webServer: {
        command: 'npm run start',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
    },

    // ==================================================
    // Filtering Tests
    // Glob patterns or regular expressions to ignore test files.
    testIgnore: '*test-assets',

    // Glob patterns or regular expressions that match test files.
    testMatch: '*todo-tests/*.spec.ts',

    // ==================================================
    // Advanced Configuration
    // Folder for test artifacts such as screenshots, videos, traces, etc.
    outputDir: 'test-results',

    // path to the global setup files.
    globalSetup: require.resolve('./global-setup'),

    // path to the global teardown files.
    globalTeardown: require.resolve('./global-teardown'),

    // Each test is given 30 seconds.
    timeout: 30000,
    // ==================================================
    // Expect Options
    expect: {
        // Maximum time expect() should wait for the condition to be met.
        timeout: 5000,

        toHaveScreenshot: {
            // An acceptable amount of pixels that could be different, unset by default.
            maxDiffPixels: 10,
        },

        toMatchSnapshot:  {
            // An acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1.
            maxDiffPixelRatio: 10,
        },
    },
});
