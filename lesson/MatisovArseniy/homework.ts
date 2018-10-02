function isInArray<T>(mainArray: T[], ...args: T[]): boolean {
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

function summator(...args: StringOrNumber[]): StringOrNumber {
    const initVal = typeof args[0] === 'string' ? '' : 0;

    return args.reduce((result, currentValue) => sum(result, currentValue), initVal);
}

function getUnique<T>(...args: T[]): T[] {
    const uniqArgs: Set<T> = new Set(args);

    return [...uniqArgs];
}

// console.log(getUnique('asdf', 'asdf', 'a', 'b', 'a'));
