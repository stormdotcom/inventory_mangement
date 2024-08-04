module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsdoc/recommended',
        'plugin:prefer-arrow/recommended',
    ],
    plugins: [
        'node',
        'import',
        'jsdoc',
        'prefer-arrow',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-unused-vars': 'warn', // Warn for unused variables
        'no-undef': 'error', // Error for variables that are not defined
        'import/order': ['error', { 'alphabetize': { order: 'asc', caseInsensitive: true } }],
        'import/newline-after-import': 'error',
        'import/no-named-as-default': 'off',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/newline-after-description': 'error',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                'disallowPrototype': true,
                'singleReturnOnly': false,
                'classPropertiesAllowed': false,
            },
        ],
        'node/no-unpublished-require': 'off',
        'node/no-missing-import': 'off',
    },
};
