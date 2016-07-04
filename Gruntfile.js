'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        jsdoc2md: 'grunt-jsdoc-to-markdown',
        force: 'grunt-force-task'
    });

    var options = {
        BuildConfig: {
            libDirectory: 'lib',
            testDirectory: 'test',
            targetDirectory: 'target',
            nodeMajorVersion: Number(process.version.match(/^v(\d+)/)[1])
        },
        config: {
            src: 'project/build/*.js'
        }
    };

    options.BuildConfig.es6Support = (options.BuildConfig.nodeMajorVersion >= 4);

    global.build = {
        options: options
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);
};
