import { CorsOptions } from 'cors';

export interface Config {
  env: string;
  server: {
    host: string;
    port: number;
  };
  log: {
    format: 'combined' | 'common' | 'dev' | 'short' | 'tiny';
    level: 'error' | 'warn' | 'info' | 'http' | 'debug';
  };
  allowedOrigins: Array<string>;

  ARGON_SECRET_PEPPER: string;
  JWT_ACCESS_TOKEN_EXPIRATION: string;
  JWT_REFRESH_TOKEN_EXPIRATION: string;
  JWT_REFRESH_TOKEN_COOKIE_EXPIRATION: number;
}
