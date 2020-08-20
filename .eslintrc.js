module.exports = {
    env: {
        browser: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'react-app',
        'eslint-config-react-app'
    ],
    plugins: ['@typescript-eslint', '@typescript-eslint/tslint'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-assertions': ['error', {
            'assertionStyle': 'as',
            'objectLiteralTypeAssertions': 'never'
        }],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/triple-slash-reference': ['error', {
            'path': 'never',
            'types': 'always',
            'lib': 'never'
        }],
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', {
            'ignoreRestSiblings': true,
            'argsIgnorePattern': '^_'
        }],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react/prop-types': 'off',
        'arrow-body-style': 'error',
        'arrow-parens': ['off', 'as-needed'],
        complexity: 'off',
        'comma-dangle': 'warn',
        'constructor-super': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'eol-last': 'off',
        'guard-for-in': 'error',
        'linebreak-style': 'off',
        'max-classes-per-file': ['error', 1],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error']
            }
        ],
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'padding-line-between-statements': ['error', {
            'blankLine': 'always',
            'prev': 'class',
            'next': '*'
        }, {
            'blankLine': 'always',
            'prev': '*',
            'next': 'class'
        }],
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true
        }],
        'no-extra-semi': 'off',
        semi: 'off',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'off',
        'no-multiple-empty-lines': 'off',
        'no-multi-spaces': 'warn',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': 'off',
        'no-var': 'error',
        'object-shorthand': 'error',
        'react/display-name': 'warn',
        'react/jsx-curly-spacing': [2, { 'when': 'always' }],
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quote-props': 'off',
        radix: 'error',
        'space-before-function-paren': 'off',
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rulesDirectory: [
                    'node_modules/tslint-react/rules',
                    'node_modules/tslint-microsoft-contrib'
                ],
                rules: {
                    'comment-format': [true, 'check-space'],
                    indent: [true, 'spaces'],
                    'jsdoc-format': [true, 'check-multiline-start'],
                    'jsx-alignment': true,
                    'jsx-boolean-value': true,
                    'jsx-key': true,
                    'jsx-no-bind': true,
                    'jsx-no-lambda': true,
                    'jsx-no-string-ref': true,
                    'jsx-self-close': true,
                    'max-line-length': [
                        true,
                        {
                            length: 130,
                            'ignore-pattern': '^import'
                        }
                    ],
                    'no-duplicate-imports': true,
                    'interface-over-type-literal': 'error',
                    'no-duplicate-variable': [true, 'check-parameters'],
                    'no-implicit-dependencies': [
                        true,
                        'dev',
                        [
                            'i18n',
                            'components',
                            'containers',
                            'images',
                            'utils',
                            'styles',
                            'contexts',
                            '@material-ui/styles',
                            'icons',
                            'gqlTypes'
                        ]
                    ],
                    'no-reference-import': true,
                    'no-relative-imports': true,
                    'no-shadowed-variable': true,
                    "no-trailing-whitespace": [true, "ignore-blank-lines"],
                    'no-unused-expression': [true, 'allow-fast-null-checks', 'allow-new'],
                    'one-line': [true, 'check-open-brace', 'check-whitespace'],
                    'only-arrow-functions': [
                        true,
                        'allow-declarations',
                        'allow-named-functions'
                    ],
                    'ordered-imports': [
                        true,
                        {
                            'import-sources-order': 'case-insensitive',
                            'module-source-path': 'full',
                            'named-imports-order': 'case-insensitive'
                        }
                    ],
                    'prefer-conditional-expression': true,
                    quotemark: [
                        true,
                        'single',
                        'jsx-double',
                        'avoid-template',
                        'avoid-escape'
                    ],
                    'triple-equals': [true, 'allow-null-check'],
                    'variable-name': [true, 'ban-keywords'],
                    whitespace: [
                        true,
                        'check-branch',
                        'check-decl',
                        'check-operator',
                        'check-separator',
                        'check-type'
                    ]
                }
            }
        ]
    }
};
