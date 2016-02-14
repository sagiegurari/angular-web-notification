'use strict';

var config = require('./project/config/eslintrc-common.json');
config.env = {
    browser: true
};
config.rules.strict = [
    2,
    'function'
];
config.rules['no-implicit-globals'] = 2;

module.exports = config;
