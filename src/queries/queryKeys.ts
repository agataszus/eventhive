export const getAccountKey = () => "account";
export const getEventsKey = () => "events";
export const getEventKey = (id: number) => [getEventsKey, id];
