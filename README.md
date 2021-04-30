# TypeScript Library Starter

> An opinionated boilerplate to kick off a TypeScript library project.

[![ci](https://github.com/nerdstep/ts-lib-starter/workflows/CI/badge.svg)](https://github.com/nerdstep/ts-lib-starter/actions?query=workflow%3ACI)
[![license](https://badgen.net/github/license/nerdstep/ts-lib-starter)](./LICENSE)

## Highlights

- Typed JavaScript with [TypeScript](https://www.typescriptlang.org)
- Insanely fast builds with [esbuild](https://esbuild.github.io/)
- Testing with [Jest](https://jestjs.io)
- Code formatting with [Prettier](https://prettier.io)
- Code linting with [XO](https://github.com/xojs/xo)
- API docs with [TypeDoc](https://typedoc.org/)

## Install

With **npm**:

```shell
$ npm install <package>
```

With **yarn**:

```shell
$ yarn add <package>
```

## Usage

```js
import { hello } from '<package>'

hello('world')
```

## Development

### Scripts

#### `yarn start`

Builds the library in `watch` mode, which will trigger a re-build on changes.

#### `yarn build`

Builds the library for production.

#### `yarn test`

Launches the test runner.

#### `yarn test:watch`

Launches the test runner in the interactive watch mode.

#### `yarn test:coverage`

Launches the test runner and generates a coverage report.

#### `yarn lint`

Lints the source code.

#### `yarn ts:check`

Runs TypeScript type checking on the source code, but does not emit types.

#### `yarn docs`

Generates API documentation.

## Contributors

## License

[MIT](./LICENSE)
