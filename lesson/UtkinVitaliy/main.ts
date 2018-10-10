type snb = string | number | boolean;

function isInArray(array: ReadonlyArray<snb>, ...rest: snb[]): boolean {
    return rest.every(el => array.includes(el));
}

function summator(...rest: snb[]): number {
    return rest
        .filter(el => !Number.isNaN(Number(el)))
        .map(el => Number(el))
        .reduce((previousValue: number, currentValue: number) => previousValue + currentValue);
}

function getUnique(...rest: snb[]): snb[] {
    const unique = new Set(rest);
    return [...unique];
}

function toMatrix(arrayData: ReadonlyArray<snb>, rowSize: number): snb[][] {
    const res: snb[][] = [];
    const chunk: number = (arrayData.length - arrayData.length % rowSize) / rowSize;
    let counter: number = 0;
    for (let i = 0; i < chunk; i++) {
        res.push(arrayData.slice(counter, counter + rowSize));
        counter = counter + rowSize;
    }
    if (arrayData.slice(counter).length !== 0) {
        res.push(arrayData.slice(counter));
    }
    return res;
}

// tslint:disable-next-line
console.log(isInArray([1, 2, 3, 's', true], 2, 's', true));
// tslint:disable-next-line
console.log(summator('1', 2, 3, 's', '12', 10, 'asd213', false));
// tslint:disable-next-line
console.log(getUnique('we123', 1, 1, true, true, 2, 'a', 'b', 'a', 'a', 'ab', 5, false));
// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 's', 4, 5, 7, 'ssa', 8, 9], 3));
