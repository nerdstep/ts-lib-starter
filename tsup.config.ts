import { defineConfig } from 'tsup'
import pkg from './package.json'

/**
 * tsup is a TypeScript code bundling tool based on esbuild
 * {@link https://tsup.egoist.dev/}
 */
export default defineConfig((_options) => [
  {
    entry: {
      index: 'src/index.ts',
    },
    target: 'es2019',
    // Generate as CommonJS module
    format: ['cjs'],
    // Clean output directory before each build
    clean: true,
    // Generate TypeScript declaration file
    dts: true,
    // Minifying is not necessary as the library consumer will bundle the code
    minify: false,
    // Disable source maps since we are not minifying
    sourcemap: false,
    // Disable code splitting since this is a library
    // (code splitting only works with esm output format)
    splitting: false,
    // Add package name & version as top level comment to the dist file
    banner: { js: `\n// ${pkg.name} ${pkg.version}` },
    env: { NODE_ENV: 'production' },
  },
])
