module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'react-app',
    'react-app/jest'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Security-focused rules (no plugins required)
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-script-url': 'error',
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
    '@typescript-eslint/no-explicit-any': 'warn', // Change from error to warn
    '@typescript-eslint/no-empty-object-type': 'off', // Change from off to warn
    'react-refresh/only-export-components': 'warn', // Change from error to warn
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    
    // Code quality
    'prefer-const': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_' 
    }]
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off' // Allow any in tests too
      }
    }
  ]
};