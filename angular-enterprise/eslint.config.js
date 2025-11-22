import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import angularEslint from '@angular-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import promisePlugin from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';

export default defineConfig([
  // JavaScript configuration
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      prettier,
      import: importPlugin,
      promise: promisePlugin,
      sonarjs,
      angular: angularEslint,
    },
    extends: [
      'js/recommended',
      'plugin:prettier/recommended',
      'plugin:import/recommended',
      'plugin:promise/recommended',
      'plugin:sonarjs/recommended'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    rules: {
      // Prettier Integration
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'trailingComma': 'es5',
        'printWidth': 100,
        'semi': true,
        'bracketSpacing': true
      }],

      // Import Plugin Rules
      'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
      }],
      'import/no-unresolved': 'error',
      'import/no-cycle': 'error',

      // Promise Plugin Rules
      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',

      // SonarJS Rules
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-identical-functions': 'warn',
      // Error Prevention
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // Best Practices
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-return-await': 'error',
      'require-await': 'error',

      // Style
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],

      // ES6+
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-duplicate-imports': 'error'
    }
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: {
      prettier,
      import: importPlugin,
      promise: promisePlugin,
      sonarjs,
      angular: angularEslint,
    },
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:promise/recommended',
      'plugin:sonarjs/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        project: true
      }
    },
    rules: {
      // TypeScript Specific
      '@typescript-eslint/explicit-function-return-type': ['error', {
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true
      }],
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        'accessibility': 'explicit',
        'overrides': {
          'constructors': 'no-public'
        }
      }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',

      // Style
      '@typescript-eslint/sorted-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
      }],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'interface',
          'format': ['PascalCase'],
          'prefix': ['I']
        },
        {
          'selector': 'typeAlias',
          'format': ['PascalCase']
        },
        {
          'selector': 'enum',
          'format': ['PascalCase']
        }
      ]
    }
  }
]);
