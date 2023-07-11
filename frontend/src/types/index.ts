export * from "./routes.type";
export type authSliceInitialProps = {
  user: {
    userId?: string;
    email?: string;
    name?: string;
    avatar?: string;
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

<<<<<<< HEAD
export enum provider {
=======
enum provider {
>>>>>>> c246de5b8846262b3e902dda03000d637286fcdc
  LOCAL,
  GOOGLE,
}

export type verifySliceInitialProps = {
  email: string;
  hash: string;
};
