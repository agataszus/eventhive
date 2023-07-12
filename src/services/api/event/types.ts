import { EventDto } from "../api-types.gen";

export type AllEventsEventDto = Omit<
  EventDto,
  "createdBy" | "files" | "likes" | "ticketTypes"
> & { likesNumber: number };

export type AllEventsDto = AllEventsEventDto[];

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

export type GetEventOptions = {
  token: string;
  id: number;
};
