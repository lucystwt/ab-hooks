import { createRequire } from 'node:module'

import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import rollupPluginDts from 'rollup-plugin-dts'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

const _require = createRequire(import.meta.url)
const pkg = _require('./package.json')

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: Object.keys(pkg.peerDependencies),
  },
  {
    input: 'dist/es/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [rollupPluginDts()],
    external: [/\.css$/],
  },
])
