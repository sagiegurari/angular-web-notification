'use strict';

module.exports.tasks = {
    jsbeautifier: {
        full: {
            options: {
                config: '.jsbeautifyrc'
            },
            src: [
                require('../../bower.json').main,
                'project/**/*.js'
            ]
        }
    }
};
