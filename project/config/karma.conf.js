/*global module: false, require: false */

module.exports = function (config) {
    'use strict';

    var mainJSFile = require('../../bower.json').main;
    var commons = require('js-project-commons');

    commons.tools.karma(config, {
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/helpers/**/*.js',
            'bower_components/simple-web-notification/web-notification.js',
            mainJSFile,
            'test/spec/**/*.js'
        ]
    }, mainJSFile);
};
