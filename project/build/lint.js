'use strict';

module.exports = function (grunt) {
    grunt.registerTask('lint', 'Linting tasks.', [
        'markdownlint:full',
        'jsonlint:full',
        'jshint:full',
        'jslint:full',
        'eslint:full',
        'jscs:full'
    ]);

    return {};
};
