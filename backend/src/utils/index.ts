export * from './otp.service';

interface Payload {
  userId: string;
  email: string;
}

interface DecodedToken {
  userId: string;
}

export { DecodedToken, Payload };
