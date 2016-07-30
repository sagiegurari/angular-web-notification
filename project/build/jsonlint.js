'use strict';

module.exports.tasks = {
    jsonlint: {
        full: {
            src: [
                '*.json',
                'project/**/*.json'
            ]
        },
        format: {
            src: [
                '*.json',
                'project/**/*.json'
            ],
            options: {
                format: true,
                indent: 2
            }
        }
    }
};
