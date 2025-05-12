import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs
    },
    rules: {
      // prefisso 'I' per le interfacce
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        }
      ],
      // disabilita 'any'
      '@typescript-eslint/no-explicit-any': 'error',
      // vieta 'var'
      'no-var': 'error',
      // richiede '==='
      'eqeqeq': ['error', 'always'],
      // punti e virgola obbligatori
      'semi': ['error', 'always'],
      // preferisci const
      'prefer-const': 'error'
    }
  }
];
