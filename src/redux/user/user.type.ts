export type UserInfo = {
  accessToken: string;
  roles: string[];
  authend: boolean;
};
export type User = {
  userInfo: UserInfo;
};
