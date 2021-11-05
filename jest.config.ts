/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: 'test/.*\\.spec\\.ts(x?)$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  coverageDirectory: './coverage',
  collectCoverageFrom: ['<rootDir>/src/**', '!**/*[Mm]odule.ts'],
  roots: ['<rootDir>/test'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
};
