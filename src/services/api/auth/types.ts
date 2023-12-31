import { ChangePasswordDto, UserDto } from "../api-types.gen";

export type Tokens = {
  accessToken: string;
};

export type RegisteredUserDto = {
  tokens: Tokens;
  user: Omit<UserDto, "password" | "profile" | "organizationProfile">;
};

export type Message = {
  message: string;
};

export type ChangePasswordOption = {
  userData: ChangePasswordDto;
  token: string;
};
