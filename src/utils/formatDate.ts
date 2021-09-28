const handleDate = (date: string) => {
  const newDate = new Date(date || "");
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const allMonths = [
    ``,
    `Jan`,
    `Fev`,
    `Apr`,
    `Mar`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];

  return `${allMonths[month]} ${day}, ${year}`;
};

export default handleDate;
