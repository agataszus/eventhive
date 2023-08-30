export const getAccountKey = () => "account";
export const getEventsKey = () => "events";
export const getEventKey = (id: number) => [getEventsKey(), id];
export const getUserTicketsKey = () => "userTickets";
export const getTicketKey = (id: number) => [getUserTicketsKey(), id];
