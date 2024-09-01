import fs from "fs";

import { magicStrings } from "@magic-strings/magic-strings";

import { defaultEnvVariables } from "@constants/default-env-variables.constants";

const envFilePath = `${magicStrings.path.root}/.env`;

if (!fs.existsSync(envFilePath)) {
  console.info(`🔄 Creating .env configuration file...`);
  fs.writeFileSync(envFilePath, defaultEnvVariables);
}
