const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

module.exports = createJestConfig({
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@api(.*)$": "<rootDir>/api$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
  },
});
