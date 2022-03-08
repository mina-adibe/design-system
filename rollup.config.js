import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: 'src/**/*',
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      dir: 'lib/cjs',
    },
    {
      dir: 'lib',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    multiInput(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.prod.json',
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
