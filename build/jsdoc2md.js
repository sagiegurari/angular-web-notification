'use strict';

module.exports.tasks = {
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
};
