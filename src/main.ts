const str = {
  // Fluent Strings
  of: (str: string) => {
    return {
      repeat: (times: number) => str.repeat(Number(times)),
      // Add other string manipulation methods as needed
    };
  },

  //   Strings
  lower: (str: string) => {
    return str.toLowerCase();
  },
  upper: (str: string) => {
    return str.toUpperCase();
  },
  capitalize: (str: string) => {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, (chr) => chr.toUpperCase());
  },
};

// individual
const lower = (str: string) => {
  return str.toLowerCase();
};
const upper = (str: string) => {
  return str.toUpperCase();
};

export { str, lower, upper };
