export * from "./routes.type";
export type authSliceInitialProps = {
  user: {
    userId?: string;
    email?: string;
    name?: string;
    avatar?: null;
    googleId?: string;
    activated?: boolean;
    provider?: provider;
    updatedAt?: Date;
    createdAt?: Date;
  };
  accessToken: string;
};

enum provider {
  LOCAL,
  GOOGLE,
}

export type verifySliceInitialProps = {
  email: string;
  hash: string;
};
