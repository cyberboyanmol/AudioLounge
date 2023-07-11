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
};

export type accessTokenProps = {
  accessToken: string;
};

export type GlobalUiStateProps = {
  loading: boolean;
};

enum provider {
  LOCAL,
  GOOGLE,
}

export type verifySliceInitialProps = {
  email: string;
  hash: string;
};
