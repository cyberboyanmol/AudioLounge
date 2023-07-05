import dotenv from 'dotenv';
import { Config } from '../interfaces/config.interface';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

export const devConfig: Config = {
  env: String(process.env.NODE_ENV || 'development'),
  server: {
    host: String(process.env.HOST) || 'localhost',
    port: Number(process.env.PORT) || 8080,
  },
  log: {
    format: 'dev',
    level: 'debug',
  },
};
