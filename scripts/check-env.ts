import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import * as readline from "readline";

interface EnvVarConfig {
  key: string;
  message: string;
  default?: string;
  secret?: boolean;
}
const requiredEnvVars: EnvVarConfig[] = [
  {
    key: "HELIUS_API_KEY",
    message: "Enter your API key:",
    secret: true,
  },
  {
    key: "HELIUS_API_URL",
    message: "Enter the API URL:",
    default: "https://mainnet.helius-rpc.com",
  },
  {
    key: "PORT",
    message: "Enter the PORT you wanna run the api:",
    default: "3000",
  },
  {
    key: "IS_LOCAL",
    message: "Is environment running locally ? true or false:",
    default: "true",
  },
] as const;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query + " ", resolve);
  });
};

async function checkEnvVariables() {
  const envPath = resolve(process.cwd(), ".env");
  let envContent: { [key: string]: string } = {};

  // Read existing .env file if it exists
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, "utf-8");
    envContent = content.split("\n").reduce((acc, line) => {
      const [key, ...values] = line.split("=");
      if (key && values.length > 0) {
        acc[key.trim()] = values.join("=").trim();
      }
      return acc;
    }, {} as { [key: string]: string });
  }

  let hasChanges = false;

  // Check each required variable
  for (const envVar of requiredEnvVars) {
    if (!envContent[envVar.key]) {
      console.log(`\n${envVar.key} is not set.`);

      let value: string;
      if (envVar.default) {
        value = await question(
          `${envVar.message} (default: ${envVar.default})`
        );
        value = value || envVar.default;
      } else {
        value = await question(envVar.message);
      }

      if (value) {
        envContent[envVar.key] = value;
        hasChanges = true;
      } else {
        console.error(`Error: ${envVar.key} is required`);
        process.exit(1);
      }
    }
  }

  // Write updated content to .env file if there were changes
  if (hasChanges) {
    const newContent = Object.entries(envContent)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    writeFileSync(envPath, newContent + "\n");
    console.log("\nEnvironment variables have been updated in .env file.");
  } else {
    console.log("\nAll required environment variables are present.");
  }

  rl.close();
}

// Run the check
checkEnvVariables().catch((error) => {
  console.error("Error checking environment variables:", error);
  process.exit(1);
});
