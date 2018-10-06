///// HW1
export function isInArray<T>(array: T[], ...values: T[]): boolean {
  return !values.some((elem: T) => {
    return (
      array.findIndex((cur: T) => {
        return cur === elem;
      }) === -1
    );
  });
}

///// HW2
type SN = string | number;
export function summator(...values: SN[]): number {
  return values.reduce((prev: number, curr): number => {
    const val = Number(curr);
    return !isNaN(val) ? prev + val : prev;
  }, 0);
}

///// HW3
export function getUnique<T>(array: T[]): T[] {
  const unique: T[] = [];
  array.forEach(elem => {
    if (unique.indexOf(elem) < 0) {
      unique.push(elem);
    }
  });
  return unique;
}

///// HW4
export function toMatrix<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  const length = array.length;
  let index = 0;
  while (index < length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}
