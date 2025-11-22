module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ["**/tests/**/?(*.)+(test).[jt]s?(x)"],
    verbose: true,
    testEnvironmentOptions: {
        resources: 'usable'
    },

    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js"],
    coverageReporters: ["text", "lcov"]
};
