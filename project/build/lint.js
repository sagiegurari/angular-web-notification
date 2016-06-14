'use strict';

module.exports = function (grunt) {
    grunt.registerTask('lint', 'Linting tasks.', [
        'concurrent:lint'
    ]);

    return {
        tasks: {
            concurrent: {
                lint: {
                    target: [
                        'markdownlint:full',
                        'jsonlint:full',
                        'jshint:full',
                        'jslint:full',
                        'eslint:full',
                        'jscs:full'
                    ]
                }
            }
        }
    };
};
