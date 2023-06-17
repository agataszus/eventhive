import { OrganizationProfileDto, ProfileDto, UserDto } from "../api-types.gen";

export type CreateUserProfileDto = {
  firstName: string;
  lastName: string;
  region: ProfileDto.RegionEnum;
};
export type ActionsReturnUserProfileDto = Omit<
  UserDto,
  "password" | "organizationProfile"
> & { organizationProfile?: boolean | null };

export type CreateOrganizationProfileDto = {
  name: string;
  description: string;
  region: OrganizationProfileDto.RegionEnum;
  city: string;
  website: string;
  coverUrl: string;
};

export type OrganizationAccountDto = Omit<UserDto, "password" | "profile">;
