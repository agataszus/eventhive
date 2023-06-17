import { PaymentDto, TicketDto } from "../api-types.gen";

export type PotentialPaymentDetailsDto = {
  netPrice: number;
  fees: number;
  vat: number;
  totalPrice: number;
  ticketPrices: {
    price: number;
    ticketTypeId: number;
  }[];
};

export type PaymentDetailsDto = Omit<PaymentDto, "author"> & {
  tickets: Omit<TicketDto, "secret" | "owner" | "payment">[];
};

export type UserPaymentsDto = Omit<PaymentDto, "author" | "tickets">[];
