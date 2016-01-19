'use strict';

module.exports.tasks = {
    todos: {
        options: {
            priorities: {
                high: /(todo|TODO|fixme|FIXME)/
            }
        },
        full: {
            src: [
                'angular-web-notification.js',
                'Gruntfile.js',
                '<%=BuildConfig.testDirectory%>/**/*.js'
            ]
        }
    }
};
