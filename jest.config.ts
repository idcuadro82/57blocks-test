/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '.'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  // An array of regexp pattern strings that are matched against all module paths before those paths are to be considered 'visible' to the module loader.
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/docs/'],

  //A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
};
