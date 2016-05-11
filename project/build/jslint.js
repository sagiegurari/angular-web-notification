'use strict';

module.exports = function (grunt) {
    return {
        tasks: {
            jslint: {
                full: {
                    src: [
                        require('../config/web-config.json').mainJSFile
                    ],
                    options: {
                        edition: 'latest',
                        failOnError: true
                    },
                    directives: grunt.file.readJSON('.jslintrc')
                }
            }
        }
    };
};
