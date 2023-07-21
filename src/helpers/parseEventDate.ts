export const parseEventDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
  }).format(date);
  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date);
  const year = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(date);

  return { day, month, year };
};
