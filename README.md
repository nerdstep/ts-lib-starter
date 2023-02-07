# TypeScript Library Starter

> An opinionated boilerplate to kick off a TypeScript library project.

[![ci](https://github.com/nerdstep/ts-lib-starter/workflows/CI/badge.svg)](https://github.com/nerdstep/ts-lib-starter/actions?query=workflow%3ACI)
[![license](https://badgen.net/github/license/nerdstep/ts-lib-starter)](./LICENSE)

## Highlights

- Typed JavaScript with [TypeScript](https://www.typescriptlang.org)
- Insanely fast builds with [esbuild](https://esbuild.github.io/)
- Testing with [Jest](https://jestjs.io)
- Code formatting with [Prettier](https://prettier.io)
- Code linting with [ESLint](https://eslint.org/)
- API docs with [TypeDoc](https://typedoc.org/)

## Install

With **npm**:

```shell
npm install <package>
```

With **yarn**:

```shell
yarn add <package>
```

## Usage

```js
import { hello } from '<package>'

hello('world')
```

## Development

Library development instructions.

### Conventional Commits

When commiting code changes the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification should be followed. This ensures, for example, that the CHANGELOG can be automatically generated.

Commit Types:

- `build:`
- `chore:`
- `ci:`
- `docs:`
- `style:`
- `refactor:`
- `perf:`
- `test:`

### Scripts

The available yarn/npm scripts.

#### `start`

Builds the library in `watch` mode, which will trigger a re-build on changes.

#### `build`

Builds the library for production.

#### `test`

Launches the test runner.

#### `test:watch`

Launches the test runner in the interactive watch mode.

#### `test:coverage`

Launches the test runner and generates a coverage report.

#### `format`

Runs Prettier on the source code and fixes formatting.

#### `format:check`

Runs Prettier on the source code but only checks formatting.

#### `lint`

Lints the source code.

#### `ts:check`

Runs TypeScript type checking on the source code, but does not emit types.

#### `docs`

Generates API documentation.

## Publishing

Release management is handled via [standard-version](https://github.com/conventional-changelog/standard-version), which should be installed globally:

```shell
yarn global add standard-version
```

To create a new release run:

```shell
yarn release
```

This will:

- Increment the version in package.json
- Generate the CHANGELOG
- Create a new git release tag
- Commit the changes to the local repo

Next sync your changes with the remote repository.

Then tag the release:

```shell
yarn release:tag
```

You can also run the `release` command with the `--dry-run` flag to get the simulated output without committing to gut or updating files.

## Contributors

## License

[MIT](./LICENSE)
