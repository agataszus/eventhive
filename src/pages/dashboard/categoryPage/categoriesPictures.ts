import varials from "../../../assets/large-categories/festivals.jpg";
import pop from "../../../assets/large-categories/pop.jpg";
import electronic from "../../../assets/large-categories/electronic.jpg";
import rock from "../../../assets/large-categories/rock.jpg";
import classical from "../../../assets/large-categories/classical.jpg";
import country from "../../../assets/large-categories/country.jpg";
import alternative from "../../../assets/large-categories/alternative.jpg";
import film from "../../../assets/large-categories/film.jpg";
import { EventDto } from "../../../services/api/api-types.gen";

export const categoriesPictures: Partial<
  Record<EventDto.CategoryEnum, string>
> = {
  [EventDto.CategoryEnum.Music]: varials,
  [EventDto.CategoryEnum.PopMusic]: pop,
  [EventDto.CategoryEnum.ElectronicMusic]: electronic,
  [EventDto.CategoryEnum.RockMusic]: rock,
  [EventDto.CategoryEnum.ClassicalMusic]: classical,
  [EventDto.CategoryEnum.CountryMusic]: country,
  [EventDto.CategoryEnum.AlternativeMusic]: alternative,
  [EventDto.CategoryEnum.FilmMusic]: film,
};
