export const formatDate = (date: Date | undefined) => {
  if (date) {
    return `${date.getFullYear()}-${date
      .getMonth()
      .toString()
      .padStart(2, "0")}-${date.getDate()}`;
  }
};
