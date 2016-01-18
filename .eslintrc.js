'use strict';

var config = require('./eslintrc-common.json');
config.env = {
    browser: true
};
config.rules.strict = [
    2,
    'function'
];

module.exports = config;
