/*global module: false, require: false */

module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        BuildConfig: {
            testDirectory: 'test',
            exampleDirectory: 'example',
            targetDirectory: 'target'
        },

        clean: {
            options: {
                force: true
            },
            dot: 'true',
            target: {
                src: [
                    '<%=BuildConfig.targetDirectory%>/**'
                ]
            }
        },

        jsonlint: {
            full: {
                src: [
                    '*.json'
                ]
            }
        },

        jshint: {
            full: {
                files: {
                    src: [
                        'angular-web-notification.js'
                    ]
                }
            },
            options: {
                jshintrc: true
            }
        },

        jslint: {
            full: {
                src: [
                    'angular-web-notification.js'
                ],
                options: {
                    edition: 'latest',
                    failOnError: true
                },
                directives: {
                    browser: true,
                    vars: true,
                    plusplus: true
                }
            }
        },

        eslint: {
            full: {
                options: {
                    config: '.eslintrc'
                },
                src: [
                    'angular-web-notification.js'
                ]
            }
        },

        jscs: {
            full: {
                options: {
                    config: '.jscs.json'
                },
                files: {
                    src: [
                        'angular-web-notification.js'
                    ]
                }
            }
        },

        todos: {
            options: {
                priorities: {
                    high: /(todo|TODO|fixme|FIXME)/
                }
            },
            full: {
                src: [
                    'angular-web-notification.js',
                    '<%=BuildConfig.testDirectory%>/**/*.js',
                    '<%=BuildConfig.exampleDirectory%>/**/*.js'
                ]
            }
        },

        karma: {
            full: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        coveralls: {
            options: {
                force: true
            },
            full: {
                src: '<%=BuildConfig.targetDirectory%>/coverage/report/*.info'
            }
        },

        jsdoc2md: {
            api: {
                options: {
                    index: true,
                    private: false
                },
                src: 'angular-web-notification.js',
                dest: 'docs/api.md'
            }
        }
    });

    grunt.registerTask('cleanup', 'Cleanups', [
        'clean:target'
    ]);

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

    grunt.registerTask('test', 'Continues integration related tasks.', [
        'lint',
        'coverage-ci'
    ]);

    grunt.registerTask('docs', 'Generate docs.', [
        'jsdoc2md:api'
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
};
