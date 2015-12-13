'use strict';

module.exports.tasks = {
    coveralls: {
        options: {
            force: true
        },
        full: {
            src: '<%=BuildConfig.targetDirectory%>/coverage/report/*.info'
        }
    }
};
