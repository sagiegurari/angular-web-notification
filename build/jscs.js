'use strict';

module.exports.tasks = {
    jscs: {
        full: {
            options: {
                config: '.jscs.json'
            },
            files: {
                src: [
                    'angular-web-notification.js',
                    'Gruntfile.js',
                    '<%=BuildConfig.buildDirectory%>/**/*.js'
                ]
            }
        }
    }
};
