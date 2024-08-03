import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  rootDir: '../../',
};

export default config;
