module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/app/**", // should be tested in E2E
    "!src/lib/registry.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"], // rodar antes de tudo
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
