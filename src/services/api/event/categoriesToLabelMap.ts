import { EventDto } from "../api-types.gen";

export const categoriesToLabelMap: Partial<
  Record<EventDto.CategoryEnum, string>
> = {
  [EventDto.CategoryEnum.Music]: "Varials",
  [EventDto.CategoryEnum.PopMusic]: "Pop",
  [EventDto.CategoryEnum.ElectronicMusic]: "Electronic",
  [EventDto.CategoryEnum.RockMusic]: "Rock",
  [EventDto.CategoryEnum.ClassicalMusic]: "Classical",
  [EventDto.CategoryEnum.CountryMusic]: "Country",
  [EventDto.CategoryEnum.AlternativeMusic]: "Alternative",
  [EventDto.CategoryEnum.FilmMusic]: "Film Music",
};
