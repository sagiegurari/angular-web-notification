'use strict';

module.exports.tasks = {
    eslint: {
        full: {
            options: {
                config: '.eslintrc.js'
            },
            src: [
                require('../config/web-config.json').mainJSFile
            ]
        }
    }
};
