export const replaceSurnameWithAsterisks = (input: string): string => {
  if (input.length <= 2) {
    return input;
  }

  const firstChar = input[0];
  const lastChar = input[input.length - 1];

  return `${firstChar.toUpperCase()}**${lastChar.toUpperCase()}`;
};
