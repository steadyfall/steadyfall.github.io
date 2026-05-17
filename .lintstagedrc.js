// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const buildEslintCommand = (filenames) =>
  `npx eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{json,css,scss,html}': ['prettier --write'],
};
