import * as dotenv from 'dotenv';

// Load .env file
dotenv.config();

export const config = {
  vercelToken: process.env.VERCEL_TOKEN
};