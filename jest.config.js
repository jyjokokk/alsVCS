const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testMatch: ["**/*.test.ts", "**/*.spec.ts"],
  transform: {
    ...tsJestTransformCfg,
  },
};
