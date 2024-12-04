import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import i18nextPlugin from 'eslint-plugin-i18next';

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
        __IS_DEV__: true,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      i18next: i18nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Рекомендуемые правила плагина i18next
      'i18next/no-literal-string': ['error', { markupOnly: true }],

      // Ваши собственные правила
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      indent: [2, 2],
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
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
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
        },
      ],
    },
  },
];
