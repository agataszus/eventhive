import { parsePrice } from "./parsePrice";

export const countAndParsePrice = (
  ticketPrice: number,
  ticketQuantity: number
) => {
  const price = ticketQuantity * ticketPrice;
  const parsedPrise = parsePrice(price);
  return parsedPrise;
};
