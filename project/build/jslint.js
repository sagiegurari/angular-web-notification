'use strict';

module.exports = function (grunt) {
    return {
        tasks: {
            jslint: {
                full: {
                    src: [
                        require('../../bower.json').main
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
