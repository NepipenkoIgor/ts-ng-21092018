type StrNumBool = string | number | boolean ;
type StrNum = string | number;

const isInArray = (arr: StrNumBool[], ...args: StrNumBool[]): boolean => {
    return args.every(x => arr.indexOf(x) > -1);
};


const summator = (...args: StrNum[]): number => {

    const num: number[] = args.map(x => {
        if (typeof x === 'string') {
            return parseFloat(x);
        }
        return x;
    });
    return num.reduce((a, x) => a += x, 0);

};

const getUnique = (...args: StrNumBool[]): StrNumBool[] => {
    const arr: StrNumBool[] = [];
    for (const i of args) {
        if (arr.indexOf(i) > -1) {
            continue;
        }
        arr.push(i);
    }
    return arr;
};

const toMatrix = (data: StrNumBool[], rowSize: number): StrNumBool[][] => {
    const arr = [];
    let lastIndex = 0;
    for (let i = 0; i < data.length / rowSize; i++) {
        arr.push(data.slice(lastIndex, lastIndex + (rowSize )));
        lastIndex += (rowSize);
    }
    return arr;
};

//

// tslint:disable-next-line
console.log(isInArray([1, '2', true], 1, '2', true));
// tslint:disable-next-line
console.log(summator(1, '2', 3, '4'));

// tslint:disable-next-line
console.log(getUnique(1, '2', false, false, '2', 1));
// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 2345, 'asdsa'], 3));