/*global module: false */

module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '.',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            'angular-web-notification.js',
            'test/spec/**/*.js'
        ],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false,
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'angular-web-notification.js': ['coverage']
        },
        coverageReporter: {
            dir: 'target/coverage/report',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                }
            ]
        }
    });
};
