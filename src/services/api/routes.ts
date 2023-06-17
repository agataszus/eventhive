export const getMainUrl = () =>
  "https://socialife-backend-production.up.railway.app";

// AUTHORIZATION
export const getRegisterUserRoute = () => `${getMainUrl()}/auth/register`;
export const getRegisterOrganizationRoute = () =>
  `${getMainUrl()}/auth/register-organization`;
export const getLoginRoute = () => `${getMainUrl()}/auth/login`;
export const getChangePasswordRoute = () =>
  `${getMainUrl()}/auth/change-password`;

// EVENT
export const getEventsRoute = () => `${getMainUrl()}/event`;
export const getEventRoute = (id: number) => `${getEventsRoute()}/${id}`;
export const getCancelEventRoute = (id: number) =>
  `${getEventRoute(id)}/cancel`;
export const getLikeEventRoute = (id: number) => `${getEventRoute(id)}/like`;
export const getUnlikeEventRoute = (id: number) =>
  `${getEventRoute(id)}/unlike`;
export const getEventStatsRoute = (id: number) => `${getEventRoute(id)}/stats`;
export const getOrganizationEventsRoute = () => `${getEventsRoute()}/mine`;

// PROFILE
export const getAccountRoute = () => `${getMainUrl()}/user`;
export const getProfileRoute = () => `${getAccountRoute()}/profile`;

// TICKETS
export const getTicketsTypesRoute = (eventId: number) =>
  `${getMainUrl()}/event-ticket/${eventId}/type`;
export const getTicketTypeRoute = (eventId: number, id: number) =>
  `${getTicketsTypesRoute(eventId)}/${id}`;
export const getUserTicketsRoute = () =>
  `${getMainUrl()}/event-ticket/instance`;
export const getTicketRoute = (id: number) => `${getUserTicketsRoute()}/${id}`;

// PAYMENT
export const getPaymentRoute = () => `${getMainUrl()}/payment`;
export const getPaymentDetailsRoute = (id: number) =>
  `${getPaymentRoute()}/${id}`;
export const getPotentialPaymentDetailsRoute = () =>
  `${getMainUrl()}/calculate`;
