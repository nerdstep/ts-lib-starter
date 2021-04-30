const esbuild = require('esbuild')
const pkg = require('./package.json')

function build(args) {
  esbuild
    .build({
      entryPoints: ['src/index.ts'],
      outfile: `dist/${pkg.name}.js`,
      bundle: true,
      format: 'esm',
      target: 'es2017',
      watch: args.includes('--watch'),
      external: [
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.optionalDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
    })
    .catch(() => process.exit(1))
}

build(process.argv.slice(2))
