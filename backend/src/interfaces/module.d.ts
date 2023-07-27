import { DecodedToken } from '../utils';

declare global {
  namespace Express {
    export interface Request {
      User: DecodedToken;
    }
  }
}
