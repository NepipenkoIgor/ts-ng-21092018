// Task_1
type typeOfArg = number | string | boolean;
type SNArr = (number | string)[];

export function isInArray(firstArg: typeOfArg[], ...restOfArg: typeOfArg[]): boolean {
    restOfArg.filter((item): void | boolean => {
        if (firstArg.indexOf(item) === -1) {
            return false;
        }
    });
    return true;
}

// Test for task_1
isInArray([5, 3, 7, 8, 10], 6, 8, 9, 10); // false;
isInArray([5, 'a', 9, 8, 10], 'a', 8, 9, 10); // true;
isInArray(['a', 'b', 'c', 'd', 'e'], 'a', 'b', 'c', 'd'); // true;

// Task_2
export function summator(...theArgs: SNArr): number | string {
    let result: number | string = 0 || '';
    if (typeof theArgs[0] === 'string') {
        result = '';
        for (const item of theArgs) {
            result += item;
        }
    }
    if (typeof theArgs[0] === 'number') {
        result = 0;
        for (const item of theArgs) {
            result += parseInt(item.toString());
        }
    }
    return result;
}

// Test for task_2
// tslint:disable-next-line
console.log(summator(1, 1, 1, 3)); // 6;
// tslint:disable-next-line
console.log(summator('b', 'i', 'r', 'd')); // bird;

// Task_3
export function getUnique(...theArgs: SNArr): SNArr {
// for es6 const uniqueArr: (number | string)[] = [...new Set(theArgs)];
    const uniqueArr: SNArr = theArgs.filter((value, index, arr) => arr.indexOf(value) === index);
    return uniqueArr;
}

// Test for task_3
// tslint:disable-next-line
console.log(getUnique('a', 1, 'a', 2, '1')); // ['a', 1, 2, '1'];

// Task_4
export function toMatrix(data: SNArr, rowSize: number): SNArr[] {
    const matrix: SNArr[] = [];
    for (let i: number = 0; i < data.length; i += rowSize) {
        matrix.push(data.slice(i, i + rowSize));
    }
    return matrix;
}

// Test for task_4
// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]];