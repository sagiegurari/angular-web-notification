'use strict';

module.exports.tasks = {
    jshint: {
        full: {
            files: {
                src: [
                    '*.js',
                    '<%=BuildConfig.libDirectory%>/**/*.js'
                ]
            }
        },
        options: {
            jshintrc: true
        }
    }
};
