'use strict';

module.exports.tasks = {
    eslint: {
        full: {
            options: {
                config: '.eslintrc.js'
            },
            src: [
                'angular-web-notification.js'
            ]
        }
    }
};
