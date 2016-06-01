'use strict';

module.exports.tasks = {
    jsdoc2md: {
        api: {
            options: {
                index: true,
                private: false
            },
            src: require('../../bower.json').main,
            dest: 'docs/api.md'
        }
    }
};
