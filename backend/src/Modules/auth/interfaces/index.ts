import type { Provider, Refresh, User } from '@prisma/client';

export interface UserWithRefresh extends Refresh {
  user: User;
}

export interface GoogleUser {
  email: string;
  name: string;
  avatar: string;
  googleId: string;
  activated: boolean;
  provider: Provider;
}
