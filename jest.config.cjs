module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ["**/tests/**/?(*.)+(test).[jt]s?(x)"],
    verbose: true,
    testEnvironmentOptions: {
        resources: 'usable'
    }
};