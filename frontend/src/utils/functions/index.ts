export const getIndexGenerator = <T extends { [key: string]: any }>(
  data: T,
  index: number
) => {
  const keys = Object.keys(data);
  const firstkey = keys[0];
  const value = data[firstkey];
  return `${index}${value}`;
};

export const RE_DIGIT = new RegExp(/^\d+$/);
