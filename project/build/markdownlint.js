'use strict';

module.exports = function (grunt) {
    var markdownlint = require('markdownlint');

    /*eslint-disable no-invalid-this*/
    grunt.registerMultiTask('markdownlint', function task() {
        var done = this.async();

        markdownlint({
            files: this.filesSrc,
            config: this.data.config
        }, function callback(error, result) {
            var resultString = error || ((result || '').toString());
            if (resultString) {
                grunt.fail.warn('\n' + resultString + '\n');
            }
            done(!error || !resultString);
        });
    });
    /*eslint-enable no-invalid-this*/

    return {
        tasks: {
            markdownlint: {
                full: {
                    config: grunt.file.readJSON('project/config/.markdownrc'),
                    src: [
                        'README.md',
                        '.github/*.md'
                    ]
                }
            }
        }
    };
};
