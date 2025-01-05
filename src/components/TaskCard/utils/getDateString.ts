export const getDateString = (timestamp: number) => {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-GB", options);
};
