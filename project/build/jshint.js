'use strict';

module.exports.tasks = {
    jshint: {
        full: {
            files: {
                src: [
                    require('../config/web-config.json').mainJSFile
                ]
            }
        },
        options: {
            jshintrc: true
        }
    }
};
