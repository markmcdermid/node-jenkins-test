import packageJson from './package.json';

const { name, peerDependencies } = packageJson;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    name
  },
};
