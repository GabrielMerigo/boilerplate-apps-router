module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"], // rodar antes de tudo
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
