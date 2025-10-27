import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['students/**/src/**/*.js', 'students/**/tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    plugins: {
      jest
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': ['warn'],
      'complexity': ['warn', { max: 10 }],
      'max-depth': ['warn', { max: 3 }],
      'max-lines-per-function': ['warn', { 
        max: 50, 
        skipBlankLines: true, 
        skipComments: true 
      }],
      ...jest.configs.recommended.rules
    }
  },
  {
    // Reglas más flexibles para archivos de test
    files: ['students/**/tests/**/*.js'],
    rules: {
      'max-lines-per-function': 'off', // Los tests pueden ser largos
      'no-console': 'off' // Permitir console.log en tests
    }
  },
  {
    ignores: [
      'node_modules/',
      'coverage/',
      '*.config.js',
      '*.config.cjs'
    ]
  }
];
