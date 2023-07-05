import dotenv from 'dotenv';
import { Config } from '../interfaces/config.interface';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });
export const productionConfig: Config = {
  env: String(process.env.NODE_ENV || 'production'),
  server: {
    host: String(process.env.HOST),
    port: Number(process.env.PORT) || 5000,
  },
  log: {
    format: 'tiny',
    level: 'info',
  },
};
