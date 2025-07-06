import { defineConfig } from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    extends: [...tseslint.configs.recommended],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      semi: "error",
      // React Router специфичные правила
      'react/prop-types': 'off', // если используете TypeScript
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Общие правила для маршрутизации
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // React Router best practices
      'react/jsx-no-target-blank': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // Правила для компонентов маршрутов
      'react/display-name': 'off',
      'react/jsx-key': 'error',

      // TypeScript правила (если используете TS)
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Правила для async/await в loader'ах и action'ах
      'no-async-promise-executor': 'error',
      'require-await': 'warn',

      // Для loader и action
      'prefer-promise-reject-errors': 'error',
      'no-throw-literal': 'error',
    },
    ignores: ['node_modules', 'build', '.react-router'],
    files: ['app/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
]);