export function isInArray<T>(array: T[], ...rest: T[]): boolean {
    return rest.every(element => array.indexOf(element) !== -1);
}

type numberOrString = string | number;

export function sum(a: numberOrString, b: numberOrString): numberOrString {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

export function summator(...args: numberOrString[]): numberOrString {
    const initialValue = typeof args[0] === 'number' ? 0 : '';
    return args.reduce((acc, currentValue) => sum(acc, currentValue), initialValue);
}

export function getUnique<T>(arr: T[]): T[] {
    return arr.reduce((acc: T[], element: T): T[] => {
        if (acc.indexOf(element) === -1) {
            return [...acc, element];
        }
        return acc;
    }, []);
}

export function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const result: T[][] = [];
    let utilityArray: T[] = [];
    data.forEach((element: T, index: number) => {
        if (index % rowSize === 0) {
            utilityArray = [];
        }
        utilityArray.push(element);
        if (utilityArray.length === rowSize || index === (data.length - 1)) {
            result.push(utilityArray);
        }
    });
    return result;
}
