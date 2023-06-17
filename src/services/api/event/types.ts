import { EventDto } from "../api-types.gen";

export type AllEventsDto = (Omit<
  EventDto,
  "createdBy" | "files" | "likes" | "ticketTypes"
> & { likesNumber: number })[];

export type UpdateEventDto = Omit<EventDto, "files" | "likes" | "ticketTypes">;

export type IdEventDto = EventDto & { likesNumber: number };

export type eventStatsDto = {
  totalNetPriceEarned: number;
  totalSoldTicketsNum: number;
  soldTickets: {
    netPriceEarned: number;
    soldTicketsNum: number;
    ticketTypeId: number;
  }[];
  likes: number;
};
