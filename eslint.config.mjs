import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import jestPlugin from 'eslint-plugin-jest'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.local/**',
      '**/.vscode/**',
      '**/.idea/**',
      '**/.git/**',
      '**/coverage/**',
      '**/build/**'
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.nodeBuiltin,
        ...globals.jest
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs', '*.js']
        },
        ecmaVersion: 'es2023',
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      eslint.configs.recommended
    ],
    rules: {
      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          vars: 'all',
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    extends: [jestPlugin.configs['flat/recommended']],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: jestPlugin.environments.globals.globals
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'jest/expect-expect': 'off',
      'jest/no-conditional-expect': 'off',
      'jest/no-standalone-expect': 'off',
      'jest/prefer-strict-equal': 'off'
    }
  },
  {
    extends: [eslintPluginPrettierRecommended],
    rules: {
      'prettier/prettier': 'warn'
    }
  }
)
