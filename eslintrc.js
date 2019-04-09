const ERROR = 2;
const WARN = 1;
const IGNORE = 0;

module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        react: {
            version: 'latest' // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            //flowVersion: '0.53' // Flow version
        }
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            browser: true,
            modules: true,
            worker: true,
            mocha: true
        },
        ecmaVersion: 7,
        sourceType: 'module'
    },
    globals: {
        google: true,
        location: true
    },
    plugins: ['import', 'babel', 'react'],
    rules: {
        strict: IGNORE,
        'no-dupe-keys': ERROR,
        'babel/semi': [ERROR, 'always'],
        curly: WARN,
        eqeqeq: ERROR,
        'no-console': IGNORE,
        'babel/new-cap': ERROR,
        'no-underscore-dangle': WARN,
        quotes: [
            ERROR,
            'single',
            {
                allowTemplateLiterals: true
            }
        ],
        'import/imports-first': [ERROR, 'absolute-first'],
        'import/newline-after-import': ERROR,
        'array-callback-return': ERROR,
        'dot-notation': ERROR,
        'no-alert': ERROR,
        'no-eq-null': ERROR,
        'no-empty': ERROR,
        'no-multiple-empty-lines': [
            ERROR,
            {
                max: 1
            }
        ],
        'no-duplicate-imports': ERROR,
        'no-empty-function': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-floating-decimal': ERROR,
        'babel/no-invalid-this': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-native-reassign': ERROR,
        'no-param-reassign': ERROR,
        'no-proto': WARN,
        'no-redeclare': ERROR,
        'no-script-url': ERROR,
        'no-self-assign': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': ERROR,
        'no-unused-expressions': WARN,
        'no-void': ERROR,
        yoda: ERROR,
        'no-shadow': WARN,
        'no-unused-vars': [
            ERROR,
            {
                vars: 'all',
                args: 'after-used'
            }
        ],
        'no-use-before-define': WARN,
        'array-bracket-spacing': [ERROR, 'never'],
        camelcase: [
            ERROR,
            {
                properties: 'always'
            }
        ],
        'brace-style': ERROR,
        'quote-props': [
            'error',
            'as-needed',
            {
                keywords: false
            }
        ],
        'comma-spacing': [
            ERROR,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [ERROR, 'last'],
        'eol-last': ERROR,
        'key-spacing': [
            ERROR,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            ERROR,
            {
                overrides: {
                    for: {
                        after: true
                    }
                }
            }
        ],
        'no-trailing-spaces': ERROR,
        'linebreak-style': [ERROR, 'unix'],
        'new-parens': ERROR,
        'no-confusing-arrow': ERROR,
        'no-const-assign': ERROR,
        'no-dupe-class-members': ERROR,
        'prefer-template': ERROR,
        indent: [ERROR, 4, { SwitchCase: WARN }],
        semi: [ERROR, 'always'],
        'babel/camelcase': ERROR,
        'babel/object-curly-spacing': IGNORE,
        'babel/quotes': IGNORE,
        'babel/no-unused-expressions': ERROR,
        'babel/valid-typeof': ERROR,
        'react/jsx-first-prop-new-line': ERROR,
        'react/display-name': IGNORE, // Prevent missing displayName in a React component definition
        //"react/jsx-quotes": [ERROR, "double", "avoid-escape"], // Enforce quote style for JSX attributes
        'react/jsx-no-undef': ERROR, // Disallow undeclared variables in JSX
        'react/jsx-sort-props': IGNORE, // Enforce props alphabetical sorting
        'react/jsx-uses-react': ERROR, // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-vars': ERROR, // Prevent variables used in JSX to be incorrectly marked as unused
        'react/no-did-mount-set-state': ERROR, // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': ERROR, // Prevent usage of setState in componentDidUpdate
        'react/no-multi-comp': WARN, // Prevent multiple component definition per file
        'react/no-unknown-property': ERROR, // Prevent usage of unknown DOM property
        'react/prop-types': [ERROR, { ignore: ['children'] }], // Prevent missing props validation in a React component definition
        'react/react-in-jsx-scope': ERROR, // Prevent missing React when using JSX
        'react/self-closing-comp': ERROR, // Prevent extra closing tags for components without children
        //"react/wrap-multilines": ERROR // Prevent missing parentheses around multilines JSX,
        'react/jsx-no-bind': [
            ERROR,
            {
                ignoreDOMComponents: false,
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: true
            }
        ]
    }
};
