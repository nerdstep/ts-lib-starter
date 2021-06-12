// @ts-check
const { build, log, tsconfig } = require('estrella')
const ts = require('typescript')
const pkg = require('./package.json')

function generateTypeDefs(tsconfig, entry) {
  log.info(`Generating type declaration files for ${entry.join(', ')}`)

  const { options: compilerOptions } = ts.parseJsonConfigFileContent(
    tsconfig,
    ts.sys,
    process.cwd()
  )

  compilerOptions.declaration = true
  compilerOptions.emitDeclarationOnly = true

  //log.info(compilerOptions)

  const program = ts.createProgram(entry, compilerOptions)
  const emit = program.emit()

  //log.info(emit)

  for (const { file, messageText } of emit.diagnostics) {
    if (typeof messageText === 'string') {
      if (file) log.warn(`=> ${file.fileName}`)
      log.warn(messageText)
    } else {
      log.warn(messageText.messageText)
    }
  }
}

build({
  entry: 'src/index.ts',
  outfile: `dist/${pkg.name}.js`,
  bundle: true,
  platform: 'node',
  target: ['es2017'],
  external: [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  onEnd: (config) => {
    //log.info(config)
    generateTypeDefs(tsconfig(config), config.entry)
  },
})
