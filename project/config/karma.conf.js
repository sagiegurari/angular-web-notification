/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    const mainJSFile = require('../../package.json').main;
    const commons = require('js-project-commons');

    commons.tools.karma(config, {
        files: [
            '**/jquery/dist/jquery.js',
            '**/angular/angular.js',
            '**/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            '**/simple-web-notification/web-notification.js',
            mainJSFile,
            'test/spec/**/*.js'
        ]
    }, mainJSFile);
};
