export const setNewTicketCount = (
  variant: "decrease" | "increase",
  count: number,
  setCount: (newCount: number) => void
) => {
  if (variant === "decrease") {
    if (count === 1) return;

    setCount(count - 1);
  }

  if (variant === "increase") {
    if (count === 6) return;

    setCount(count + 1);
  }
};
