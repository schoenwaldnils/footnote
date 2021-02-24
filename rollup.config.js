import typescript from '@rollup/plugin-typescript'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
import svgr from '@svgr/rollup'

import rootPkg from './package.json'

export default (pkg = rootPkg) => ({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      // file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
    // {
    //   file: pkg.module,
    //   format: 'es',
    //   sourcemap: true,
    //   exports: 'named',
    // },
  ],
  plugins: [
    // nodeResolve(),
    svgr({
      icon: true,
      memo: true,
      svgoConfig: {
        plugins: [
          {
            // cleanupIDs: false,
            addAttributesToSVGElement: {
              attributes: ['preserveAspectRatio="xMinYMid meet"'],
            },
          },
        ],
      },
    }),
    typescript(),
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
})
