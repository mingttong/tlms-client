// https://eslint.org/docs/user-guide/configuring

var PROD_MODE = process.env.NODE_ENV === 'production'

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ]
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        // allow debugger during development
        'linebreak-style': 0,
        'indent': [2, 4],
        'radix': ['error', 'as-needed'],
        'object-shorthand': ['error', 'methods'],
        'no-unused-expressions': ["error", {"allowShortCircuit": true}],
        'no-bitwise': ['error', {'allow': ['~']}],
        'no-debugger': PROD_MODE ? 2 : 0,
        'no-console': PROD_MODE ? 1 : 0,

        'arrow-parens': ['error', 'as-needed'],
        'max-len': ['error', {"code": 128, "tabWidth": 4}],
        'import-spacing': true,
        'consistent-return': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': ['error', {
            allow: ['_o', '_o_desc', '_k', '_v'], // 排序需要用到的关键字
        }],
    }
}
