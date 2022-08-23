import dotenv from 'dotenv-safe';
const parsedNodeEnv = process.env.CI || 'development';
dotenv.config({
  path: parsedNodeEnv === 'development' ? '.env.development' : '.env.production',
});
