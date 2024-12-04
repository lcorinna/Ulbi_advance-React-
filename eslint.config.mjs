import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                __IS_DEV__: true, // Перенесли globals сюда
            },
        },
        plugins: {
            react: reactPlugin,
            '@typescript-eslint': typescriptPlugin,
            'extends': ["plugin:i18next/recommended"],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/jsx-indent': [2, 2],
            'react/jsx-indent-props': [2, 2],
            indent: [2, 2],
            'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': ['error', { markupOnly: true }],
        },
    },
];
