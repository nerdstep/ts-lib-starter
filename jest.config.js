// @ts-check
/** @type {import('jest').Config} */
const config = {
  bail: true,
  verbose: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/src/__setup__/setup-tests.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/__.*__/'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
}

module.exports = config
