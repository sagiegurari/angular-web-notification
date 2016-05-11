'use strict';

module.exports.tasks = {
    jscs: {
        full: {
            options: {
                config: '.jscs.json'
            },
            files: {
                src: [
                    require('../config/web-config.json').mainJSFile,
                    'Gruntfile.js',
                    '<%=BuildConfig.buildDirectory%>/**/*.js'
                ]
            }
        }
    }
};
