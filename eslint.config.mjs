import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  prettierRecommended,
  {
    rules: {
      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // Handled by TS version above

      // Import sorting and cleanliness
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'prettier/prettier': 'error',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),
]);
