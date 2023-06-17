import { TicketDto, TicketTypeDto } from "../api-types.gen";

export type CreateTicketTypeResponseDto = Omit<TicketTypeDto, "event">;

export type GetTicketsTypesDto = Omit<TicketTypeDto, "event" | "tickets">;

export type GetTicketDto = Omit<TicketDto, "payment" | "createdAt">;

export type UserTicketsDto = (Omit<
  TicketDto,
  "secret" | "owner" | "payment"
> & {
  type: Omit<TicketTypeDto, "tickets">;
})[];
