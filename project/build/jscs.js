'use strict';

module.exports.tasks = {
    jscs: {
        full: {
            options: {
                config: '.jscs.json'
            },
            files: {
                src: [
                    '*.js',
                    '<%=BuildConfig.libDirectory%>/**/*.js'
                ]
            }
        }
    }
};
