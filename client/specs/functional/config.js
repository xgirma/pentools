exports.config = {
    directConnect: true,

    specs: [
        'specs/*.spec.js'
    ],

    exclude: [],

    capabilities: {
        browserName: 'chrome'
    },

    baseUrl: 'http://localhost:8000',

    rootElement: 'body',

    allScriptsTimeout: 11000,

    getPageTimeout: 10000,

    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
    },

    params: {},

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    }
};