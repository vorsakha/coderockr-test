const handleLimitString = (str: string, limit?: number) => {
  const actualLimit = limit || 100;

  if (str) {
    if (str.length > actualLimit) {
      const newString = str.substring(0, actualLimit);

      return newString + "...";
    }
  }
  return str;
};

export default handleLimitString;
