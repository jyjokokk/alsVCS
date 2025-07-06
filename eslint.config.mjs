// import tseslint from 'typescript-eslint'
// import globals from 'globals'
// import { defineConfig } from 'eslint/config'

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   eslint.configs.recommended,
//   tseslint.configs.recommended,
// );

export default defineConfig([
  {
    files: ['**/*.{ts,tsx,js,jsx,mts,cts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:prettier/recommended',
    ],
    rules: {
      // Add or override rules here
      // Example: "prettier/prettier": "error"
    },
  },
])
