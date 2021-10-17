/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    const mainJSFile = require('../package.json').main;

    config.set({
        basePath: '../',
        frameworks: [
            'mocha',
            'sinon-chai'
        ],
        port: 9876,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'ChromiumHeadless'
        ],
        singleRun: false,
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            [mainJSFile]: [
                'coverage'
            ]
        },
        coverageReporter: {
            dir: 'coverage',
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
        },
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox'
                ]
            }
        },
        files: [
            '**/jquery/dist/jquery.js',
            '**/angular/angular.js',
            '**/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            '**/simple-web-notification/web-notification.js',
            mainJSFile,
            'test/spec/**/*.js'
        ]
    });
};
