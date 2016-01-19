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

    grunt.registerTask('coverage-prepare', 'Pre test tasks', [
        'cleanup'
    ]);

    grunt.registerTask('coverage-ci', 'Test for continues integration.', [
        'coverage-prepare',
        'karma:full',
        'coveralls:full'
    ]);

    grunt.registerTask('build', 'Run all build steps.', [
        'lint',
        'docs',
        'coverage-prepare',
        'karma:full'
    ]);

    return {};
};
