export function isInArray<T>(mainArray: T[], ...args: T[]): boolean {
    return args.every((item) => mainArray.indexOf(item) !== -1);
}

type StringOrNumber = string | number;

function sum(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

export function summator(...args: StringOrNumber[]): StringOrNumber {
    const initVal = typeof args[0] === 'string' ? '' : 0;

    return args.reduce((result, currentValue) => sum(result, currentValue), initVal);
}

export function getUnique<T>(...args: T[]): T[] {
    const uniqArgs = new Set(args);

    return [...uniqArgs];
}

export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < Math.ceil(data.length / rowSize); i++) {
        result.push(data.slice(i * rowSize, rowSize * (i + 1)));
    }

    return result;
}