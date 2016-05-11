/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    var mainJSFile = require('./web-config.json').mainJSFile;

    var karmaConfig = {
        basePath: '../../',
        frameworks: [
            'mocha',
            'sinon-chai'
        ],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            mainJSFile,
            'test/spec/**/*.js'
        ],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'PhantomJS'
        ],
        singleRun: false,
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {},
        coverageReporter: {
            dir: 'target/coverage/report',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                }
            ],
            check: {
                global: {
                    statements: 100,
                    functions: 100,
                    lines: 100,
                    branches: 100
                }
            }
        }
    };

    karmaConfig.preprocessors[mainJSFile] = [
        'coverage'
    ];

    config.set(karmaConfig);
};
