'use strict';

module.exports = function (grunt) {
    var fs = require('fs');
    var path = require('path');

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        jsdoc2md: 'grunt-jsdoc-to-markdown',
        force: 'grunt-force-task'
    });

    /*jslint nomen: true */
    //jscs:disable disallowDanglingUnderscores
    /*eslint-disable no-underscore-dangle*/
    var currentDirectory = __dirname;
    /*eslint-enable no-underscore-dangle*/
    //jscs:enable disallowDanglingUnderscores
    /*jslint nomen: false */

    var options = {
        buildConfig: {
            projectRoot: currentDirectory,
            nodeProject: false,
            packageJSON: require('./package'),
            libDirectory: 'lib',
            testDirectory: 'test',
            targetDirectory: 'target',
            nodeMajorVersion: Number(process.version.match(/^v(\d+)/)[1])
        },
        config: {
            src: 'project/build/*.js'
        }
    };

    //load bower json if found
    var bowerJSONFile = path.join(options.buildConfig.projectRoot, 'bower.json');

    /*jslint stupid: true */
    /*eslint-disable no-sync*/
    if (fs.existsSync(bowerJSONFile)) {
        options.buildConfig.bowerJSON = require('./bower');
    }
    /*eslint-enable no-sync*/
    /*jslint stupid: false */

    options.buildConfig.es6Support = (options.buildConfig.nodeMajorVersion >= 4);

    global.build = {
        options: options
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);
};
