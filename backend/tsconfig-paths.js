const tsconfig = require('./tsconfig.json');

const tsconfigPath = require('tsconfig-paths');
const { baseUrl } = tsconfig.compilerOptions;

tsconfigPath.register({
  baseUrl,
  paths: {
    '@/*': ['./dist/*'],
  },
});
