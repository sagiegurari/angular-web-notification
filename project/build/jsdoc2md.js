'use strict';

module.exports.tasks = {
    jsdoc2md: {
        api: {
            options: {
                index: true,
                private: false
            },
            src: require('../config/web-config.json').mainJSFile,
            dest: 'docs/api.md'
        }
    }
};
