import type { Config } from "@jest/types";

import { processEnv } from "@helpers/processEnv/processEnv.helper";

const { TEST_NAMES } = processEnv;

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  rootDir: `./`,
  passWithNoTests: true,
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
      },
    ],
  ],
  moduleNameMapper: {
    "@helpers/(.*)": "<rootDir>/src/helpers/$1",
    "@constants/(.*)": "<rootDir>/src/constants/$1",
    "@magic-strings/(.*)": "<rootDir>/src/magic-strings/$1",
  },
  ...getTestParams(),
};

export default config;

function getTestParams(): Record<string, string | string[]> {
  return TEST_NAMES
    ? {
        testRegex: TEST_NAMES.split(",").map(testName =>
          !testName.endsWith(".test.ts") ? `${testName}.test.ts` : testName,
        ),
      }
    : {
        testMatch: ["**/*.test.ts"],
      };
}
