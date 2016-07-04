'use strict';

module.exports.tasks = {
    eslint: {
        full: {
            options: {
                config: '.eslintrc.js'
            },
            src: [
                '*.js',
                '<%=BuildConfig.libDirectory%>/**/*.js'
            ]
        }
    }
};
