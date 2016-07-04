'use strict';

module.exports.tasks = {
    eslint: {
        full: {
            options: {
                config: '.eslintrc.js'
            },
            src: [
                require('../../bower.json').main
            ]
        }
    }
};
