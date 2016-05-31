'use strict';

module.exports = function (grunt) {
    grunt.registerTask('coverage-prepare', 'Pre test tasks', [
        'cleanup'
    ]);

    grunt.registerTask('coverage', 'Test for standalone builds.', [
        'coverage-prepare',
        'karma:full',
        'integration-test'
    ]);

    grunt.registerTask('coverage-ci', 'Test for continues integration.', [
        'coverage',
        'coveralls:full'
    ]);

    grunt.registerTask('build', 'Run all build steps.', [
        'lint',
        'docs',
        'coverage'
    ]);

    return {};
};
