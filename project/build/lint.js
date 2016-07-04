'use strict';

module.exports = function (grunt) {
    grunt.registerTask('lint', 'Linting tasks.', [
        'concurrent:lint'
    ]);

    var eslintPrefix = '';
    if (!global.build.options.BuildConfig.es6Support) {
        eslintPrefix = 'force:';
    }

    return {
        tasks: {
            concurrent: {
                lint: {
                    target: [
                        'markdownlint:full',
                        'jsonlint:full',
                        'jshint:full',
                        'jslint:full',
                        eslintPrefix + 'eslint:full',
                        'jscs:full'
                    ]
                }
            }
        }
    };
};
