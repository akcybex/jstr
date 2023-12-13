export const str = {
  of: (str: string) => {
    return {
      repeat: (times: number) => str.repeat(times),
      // Add other string manipulation methods as needed
    };
  },
};
