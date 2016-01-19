'use strict';

module.exports.tasks = {
    karma: {
        full: {
            configFile: './project/config/karma.conf.js',
            singleRun: true,
            browsers: ['PhantomJS']
        }
    }
};
