import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/paywall.min.js',
    format: 'umd',
    name: 'Paywall',
    sourcemap: true
  },
  plugins: [terser()]
}; 