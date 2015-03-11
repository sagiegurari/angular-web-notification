'use strict';

module.exports = function (grunt) {
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

        blanket: {
            full: {
                options: {
                    'data-cover-only': 'angular-web-notification.js'
                },
                files: {
                    'target/coverage/': ['./']
                }
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
                    'private': false
                },
                src: 'angular-web-notification.js',
                dest: 'docs/api.md'
            }
        }
    });

    grunt.registerTask('full', 'Run all build steps.', [
        'jsonlint:full',
        'jshint:full',
        'jslint:full',
        'eslint:full',
        'todos:full',
        'jsdoc2md:api',
        'coverage'
    ]);

    grunt.registerTask('coverage', 'Run all module tests cases.', [
        'clean:target',
        'karma:full'
    ]);

    grunt.registerTask('continuesIntegration', 'Run all module tests cases.', [
        'jsonlint:full',
        'jshint:full',
        'jslint:full',
        'eslint:full',
        'todos:full',
        'coverage',
        'coveralls:full'
    ]);
};
