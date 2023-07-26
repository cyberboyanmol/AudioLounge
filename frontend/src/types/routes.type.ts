export type SendOtpProps = {
  email: string;
};

export type verifyOtpProps = {
  email: string;
  otp: number;
  hash: string;
};

