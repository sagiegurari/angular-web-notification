'use strict';

module.exports.tasks = {
    clean: {
        options: {
            force: true
        },
        dot: 'true',
        target: {
            src: [
                '<%=BuildConfig.targetDirectory%>/**'
            ]
        }
    }
};
