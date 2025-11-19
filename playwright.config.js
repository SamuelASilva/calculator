const { devices } = require('@playwright/test');


module.exports = {
    timeout: 30 * 1000,
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
    ]
};