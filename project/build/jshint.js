'use strict';

module.exports.tasks = {
    jshint: {
        full: {
            files: {
                src: [
                    require('../../bower.json').main
                ]
            }
        },
        options: {
            jshintrc: true
        }
    }
};
