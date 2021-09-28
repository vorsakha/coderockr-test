const handleLimitString = (str: string) => {
  if (str.length > 100) {
    const newString = str.substring(0, 100);

    return newString + "...";
  }

  return str;
};

export default handleLimitString;
