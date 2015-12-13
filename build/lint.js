'use strict';

module.exports = function (grunt) {
    grunt.registerTask('lint', 'Linting tasks.', [
        'jsonlint:full',
        'jshint:full',
        'jslint:full',
        'eslint:full',
        'jscs:full',
        'todos:full'
    ]);

    return {};
};
