'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var options = {
        BuildConfig: {
            libDirectory: 'lib',
            testDirectory: 'test',
            targetDirectory: 'target',
            buildDirectory: 'build'
        },
        config: {
            src: 'build/*.js'
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);
};
