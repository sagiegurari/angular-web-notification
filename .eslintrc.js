module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'mocha': true
    },
    'globals': {
        'angular': 'readonly'
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 13
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
