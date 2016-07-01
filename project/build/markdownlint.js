'use strict';

module.exports = function (grunt) {
    return {
        tasks: {
            markdownlint: {
                full: {
                    options: {
                        config: grunt.file.readJSON('project/config/.markdownrc')
                    },
                    src: [
                        'README.md',
                        '.github/*.md'
                    ]
                }
            }
        }
    };
};
