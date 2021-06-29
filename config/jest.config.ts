import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '../',
  roots: ['<rootDir>/src', '<rootDir>/tests/unit'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(html|xml|txt|md)$': 'jest-raw-loader',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-extended'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/client/$1',
    '@resources/(.*)$': '<rootDir>/src/resources/$1',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};

export default config;
