export function isInArray<T>(array: T[], ...rest: T[]): boolean {
    return rest.every(element => array.includes(element));
}

type sn = string | number;

export function summator(...rest: sn[]): number {
    return rest.reduce<number>((sum: number, current: sn) =>
        sum + parseInt(current as string, 10), 0);
}

export function getUnique<T>(...rest: T[]): T[] {
    const uniqueArr = new Set(rest);
    return [...uniqueArr];
}

export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const newData: T[][] = [];
    const subArr: T[] = data.slice(0, rowSize);
    data.forEach(() => newData.push(subArr));
    return newData;
}