import { TicketDto, TicketTypeDto } from "../api-types.gen";

export type CreateTicketTypeResponseDto = Omit<TicketTypeDto, "event">;

export type GetTicketsTypesDto = Omit<TicketTypeDto, "event" | "tickets">;

export type GetTicketDto = Omit<TicketDto, "payment" | "createdAt">;

export type ListTicketDto = Omit<TicketDto, "secret" | "owner" | "payment"> & {
  type: Omit<TicketTypeDto, "tickets">;
};

export type UserTicketsDto = ListTicketDto[];
