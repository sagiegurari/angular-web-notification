'use strict';

module.exports.tasks = {
    jscs: {
        full: {
            options: {
                config: '.jscs.json'
            },
            files: {
                src: [
                    require('../../bower.json').main,
                    'Gruntfile.js',
                    '<%=BuildConfig.buildDirectory%>/**/*.js'
                ]
            }
        }
    }
};
