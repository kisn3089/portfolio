export const calcById = (sign: string) => (sign === "-" ? -1 : 1);

export const calcByParmas = (sign: string, target: number) =>
  sign === "-" ? -target : target;
