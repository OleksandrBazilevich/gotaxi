type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string | undefined,
  mods: Mods = {},
  additionals: string[] = []
): string => {
  return [
    cls,
    ...additionals.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(" ");
};
