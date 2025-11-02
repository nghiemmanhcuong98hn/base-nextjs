// eslint.config.ts
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default defineConfig([
  // Base configs from Next.js
  ...nextVitals,
  ...nextTs,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**', 'dist/**'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      '@typescript-eslint': tseslint,
    },

    rules: {
      // ✅ TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // ✅ React
      'react/react-in-jsx-scope': 'off', // Next.js auto-imports React
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'react/self-closing-comp': 'warn',

      // ✅ React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Accessibility
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'off', // Next.js <Link> xử lý riêng

      // ✅ Import/Export hygiene
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'warn',

      // ✅ Code style
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },

  // ✅ Prettier cuối cùng để override rule conflict
  prettier,
]);
