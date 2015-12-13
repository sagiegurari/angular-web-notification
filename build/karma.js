'use strict';

module.exports.tasks = {
    karma: {
        full: {
            configFile: 'karma.conf.js',
            singleRun: true,
            browsers: ['PhantomJS']
        }
    }
};
