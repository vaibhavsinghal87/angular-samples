// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularParser = require('@angular-eslint/template-parser');
const tsParser = require('@typescript-eslint/parser');
const globals = require('globals');

// import { defineConfig } from 'eslint/config';
// import { ESLint } from 'eslint';
// import globals from 'globals';
// import angularTemplate from '@angular-eslint/eslint-plugin-template';
// import angularParser from '@angular-eslint/template-parser';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';
// import angular from 'angular-eslint';

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      // parserOptions: {
      //   project: './tsconfig.json',
      //   sourceType: 'module',
      // },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {},
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // 'sort-imports': [
      //   'error',
      //   {
      //     ignoreCase: false,
      //     ignoreDeclarationSort: false,
      //     ignoreMemberSort: false,
      //     memberSyntaxSortOrder: [
      //       'none',
      //       'all',
      //       'multiple',
      //       'single',
      //     ],
      //     allowSeparatedGroups: false,
      //   },
      // ],
      '@typescript-eslint/adjacent-overload-signatures':
        'error',
      '@typescript-eslint/no-inferrable-type': 'off',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/explicit-function-return-type':
        'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-nullish-coalescing':
        'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/related-getter-setter-pairs':
        'error',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/use-lifecycle-interface': ['error'],
      '@angular-eslint/contextual-decorator': ['error'],
      '@angular-eslint/contextual-lifecycle': ['error'],
      '@angular-eslint/no-async-lifecycle-method': [
        'error',
      ],
      '@angular-eslint/no-developer-preview': ['error'],
      '@angular-eslint/no-duplicates-in-metadata-arrays': [
        'error',
      ],
      '@angular-eslint/no-empty-lifecycle-method': [
        'error',
      ],
      '@angular-eslint/no-experimental': ['error'],
      '@angular-eslint/no-forward-ref': ['error'],
      '@angular-eslint/no-lifecycle-call': ['error'],
      '@angular-eslint/no-pipe-impure': ['error'],
      '@angular-eslint/no-uncalled-signals': ['error'],
      '@angular-eslint/prefer-inject': ['error'],
      '@angular-eslint/prefer-standalone': ['error'],
      '@angular-eslint/relative-url-prefix': ['error'],
      '@angular-eslint/sort-lifecycle-methods': ['error'],
      '@angular-eslint/use-component-view-encapsulation': [
        'error',
      ],
      '@angular-eslint/use-injectable-provided-in': [
        'error',
      ],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularParser,
    },
    plugins: {
      // '@angular-eslint/template': angularTemplate,
    },
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
      // angularTemplate.configs.recommended,
    ],
    rules: {
      ...angularTemplate.configs.recommended.rules,
      '@angular-eslint/template/banana-in-box': ['error'],
      '@angular-eslint/template/button-has-type': ['error'],
      '@angular-eslint/template/click-events-have-key-events':
        ['error'],
      '@angular-eslint/template/conditional-complexity': [
        'error',
        {
          maxComplexity: 5,
        },
      ],
      '@angular-eslint/template/elements-content': [
        'error',
      ],
      '@angular-eslint/template/eqeqeq': ['error'],
      '@angular-eslint/template/no-any': ['error'],
      '@angular-eslint/template/no-call-expression': [
        'error',
      ],
      '@angular-eslint/template/no-duplicate-attributes': [
        'error',
      ],
      '@angular-eslint/template/no-empty-control-flow': [
        'error',
      ],
      '@angular-eslint/template/no-inline-styles': [
        'error',
      ],
      '@angular-eslint/template/no-interpolation-in-attributes':
        ['warn'],
      '@angular-eslint/template/no-negated-async': [
        'error',
      ],
      '@angular-eslint/template/no-nested-tags': ['error'],
      '@angular-eslint/template/no-positive-tabindex': [
        'error',
      ],
      '@angular-eslint/template/prefer-at-else': ['error'],
      '@angular-eslint/template/prefer-at-empty': ['error'],
      '@angular-eslint/template/prefer-built-in-pipes': [
        'warn',
      ],
      '@angular-eslint/template/prefer-contextual-for-variables':
        ['warn'],
      '@angular-eslint/template/prefer-control-flow': [
        'error',
      ],
      '@angular-eslint/template/prefer-ngsrc': ['error'],
      '@angular-eslint/template/prefer-static-string-properties':
        ['warn'],
      '@angular-eslint/template/prefer-template-literal': [
        'error',
      ],
      '@angular-eslint/template/prefer-self-closing-tags': [
        'error',
      ],
    },
  },
]);
