type StringOrNumber = string | number;

export function isInArray (source: StringOrNumber[], ...values: StringOrNumber[]): boolean {
    return values.every((value) => {
        return source.indexOf(value) >= 0;
    });
}

const arr = [1, 2, 3, 4, 5];
isInArray(arr, 1, 2, 3);

export function summator (...values: StringOrNumber[]): StringOrNumber {
    let initialValue: StringOrNumber;

    if (typeof values[0] === 'string') {
        initialValue = '';
    } else {
        initialValue = 0;
    }

    return values.reduce((result: StringOrNumber, currentValue: StringOrNumber): StringOrNumber => {
        return add(result, currentValue);
    }, initialValue);
}

summator(1, 2, 'x');

function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

export function getUnique<T, S>(...args: (T|S)[]): (T|S)[] {
    const result: (T|S)[] = [];

    for (let i = 0; i < args.length; i++) {
        if (result.indexOf(args[i]) === -1) {
            result.push(args[i]);
        }
    }

    return result;
}

getUnique(1, 2, 3, '3', 5);

// @todo change implementation and write tests
export function toMatrix<T, S>(data: (T|S)[], rowSize: number): (T|S)[][] {
    const result: (T[]|S[])[] = [];

    for (let i = 0; i < data.length; i++) {
        const item: T[]|S[] = new Array(rowSize);
        // @ts-ignore
        result.push(item.fill(data[i]));
    }

    return result;
}


toMatrix([1, 2, '3'], 2);