import { config } from "dotenv";

config();

interface processEnvHelperInterface {
  CI: string;
  TEST_NAMES: string;
}

export const processEnv = process.env as unknown as processEnvHelperInterface;
