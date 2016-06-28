'use strict';

module.exports = function (grunt) {
    grunt.registerTask('cleanup', 'Cleanups', [
        'clean:target'
    ]);

    grunt.registerTask('test', 'Continues integration related tasks.', [
        'lint',
        'coverage-ci'
    ]);

    grunt.registerTask('docs', 'Generate docs.', [
        'concurrent:docs'
    ]);

    grunt.registerTask('empty', 'Empty Task', []);

    grunt.registerTask('lint', 'Linting tasks.', [
        'concurrent:lint'
    ]);

    return {
        tasks: {
            concurrent: {
                docs: {
                    target: [
                        'gitdown:readme',
                        'jsdoc2md:api'
                    ]
                }
            }
        }
    };
};
