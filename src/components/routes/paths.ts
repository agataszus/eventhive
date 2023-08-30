export const getRootPath = () => "/";
export const getLoginPath = () => "/login";
export const getDashboardPath = () => "/dashboard";
export const getDashboardHomePath = () => `${getDashboardPath()}/home`;
export const getLikedEventsPath = () => `${getDashboardPath()}/liked-events`;
export const getEventPath = (id: number) => `${getDashboardPath()}/event/${id}`;
export const getAccountPath = () => `${getDashboardPath()}/account`;
export const getCategoryPath = (category: string) =>
  `${getDashboardPath()}/categories/${category}`;
export const getCheckoutPath = () => `${getDashboardPath()}/checkout`;
export const getMyTicketsPath = () => `${getDashboardPath()}/my-tickets`;
