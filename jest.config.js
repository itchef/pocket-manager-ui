module.exports = {
  roots: ['<rootDir>/src/specs/'],
  setupFilesAfterEnv: ['<rootDir>/src/specs/setupTests.js'],
  modulePaths: [
    './stubs',
  ],
  moduleNameMapper: {
    '.scss$': 'styleStubs.js',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/specs/**/*.spec.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
