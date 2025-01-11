import { parseBoolean } from "./shared";

interface Env {
  IS_LOCAL: boolean;
  PORT: number;
  API_KEY: string;
  HELIUS_API_URL: string;
  HELIUS_API_KEY: string;
}

const env: Env = {
  IS_LOCAL: parseBoolean(process.env.IS_LOCAL),
  PORT: parseInt(process.env.PORT),
  API_KEY: process.env.API_KEY,
  HELIUS_API_URL: process.env.HELIUS_API_URL,
  HELIUS_API_KEY: process.env.HELIUS_API_KEY,
};

export default env;
