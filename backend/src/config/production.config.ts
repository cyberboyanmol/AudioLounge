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
  ARGON_SECRET_PEPPER: String(process.env.ARGON_SECRET_PEPPER),
  JWT_ACCESS_TOKEN_EXPIRATION: String(process.env.JWT_ACCESS_TOKEN_EXPIRATION),
  JWT_REFRESH_TOKEN_EXPIRATION: String(process.env.JWT_REFRESH_TOKEN_EXPIRATION),
  JWT_REFRESH_TOKEN_COOKIE_EXPIRATION: Number(process.env.JWT_REFRESH_TOKEN_COOKIE_EXPIRATION),
};
