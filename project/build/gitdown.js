'use strict';

/*jslint nomen: true*/

var path = require('path');

module.exports.tasks = {
    gitdown: {
        readme: {
            options: {
                gitinfo: {
                    gitPath: path.join(__dirname, '../../')
                },
                headingNesting: {
                    enabled: false
                }
            },
            files: {
                'README.md': './project/config/README-template.md'
            }
        }
    }
};
