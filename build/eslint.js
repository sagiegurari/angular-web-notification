'use strict';

module.exports.tasks = {
    eslint: {
        full: {
            options: {
                config: '.eslintrc.json'
            },
            src: [
                'angular-web-notification.js'
            ]
        }
    }
};
