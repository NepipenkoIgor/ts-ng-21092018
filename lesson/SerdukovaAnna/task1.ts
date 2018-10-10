/* Anna Serdukova
 * Д\З 1
*/


/*
 * TASK 1
*/
function isAnArray(arr: string[], ...restArr: string[]): boolean {
    for (let i = 0; i < restArr.length; i++) {
        if (!arr.includes(restArr[i]) ) {
            return false;
        }
    }
    return true;
}

let strArr: string[] = ['Hello, World', 'Mask', 'Mark'];
isAnArray(strArr, 'Hello, World', 'Mask');
isAnArray(strArr, 'Just', 'Mask');


/*
 * TASK 2
*/
function summator(...restArr: (string | number)[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < restArr.length; i++) {
        // Почему так нельзя?
        // let num: number = (typeof restArr[i] === 'string') ? parseFloat(restArr[i]) : restArr[i];

        // А так можно...
        sum = sum + parseFloat(restArr[i].toString());
    }
    return sum;
}

summator(1, '2', 3);


/*
 * TASK 3
 * я так поняла, что если массив [1, 2, 2, 4], то на выходе нужно получить [1, 2, 4], а не [1, 2, undefined, 4]
*/

function getUnique(...restArr: (string | number | boolean)[]): (string | number | boolean)[] {
    const uniqArr: (string | number | boolean)[] = [];
    if (!(restArr[0] === undefined)) {
        uniqArr.push(restArr[0]);
    }

    for ( let i = 1; i < restArr.length; i++) {
        if (!uniqArr.includes(restArr[i])) {
            uniqArr.push(restArr[i]);
        }
    }

    return uniqArr;
}

getUnique(1, 2, 'test', true, 1, false, 2, false, 20, 'map', 'test', 'Jhon');
// tslint:disable-next-line
getUnique(1, 2, 'test', true, 1, false, 2, false, 20, 'map', 'test', 'Jhon');


/*
 * TASK 4
 * *toMatrix
 * *
*/
type Matrix = number[][];

function toMatrix(data: number[], rowSize: number): Matrix {
    const result: Matrix = [];
    const endElems: number = data.length % rowSize;
    // тут надо объявлять тип let i: number ? или TS сам знает, что счетчик это число?
    for (let i: number = 0; i < data.length - rowSize; i = i + rowSize) {
       result.push(data.slice(i, i + rowSize)); // вернуть количество элементов равное rowSize
    }

    // Добрать последние элементы
    result.push(data.slice(data.length - endElems, data.length));

    return result;
}

let dataArr: number[] = [1, 2, 3, 4, 5, 6, 7];
let rowSizeNum = 5;

// tslint:disable-next-line
toMatrix(dataArr, rowSizeNum);
// tslint:disable-next-line
toMatrix(dataArr, 2);
// tslint:disable-next-line
toMatrix(dataArr, 3);

/*
// Старая версия решения
type Matrix = number[][];

function toMatrix(data: Matrix, rowSize: number): Matrix {
    const result: Matrix = [];
    for (let i = 0; i < data.length; i++) {
       result[i] = [];
       if (rowSize < data[i].length) {
           result[i] = data[i].slice(0, rowSize); // вернуть количество элементов равное rowSize
       } else {
           result[i] = data[i]; // если элементов не хватает, вернуть сколько есть
       }
    }

    return result;
}

let dataArr: Matrix = [[1, 2, 3], [1, 2, 3, 4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5]];
let rowSizeNum = 5;

// tslint:disable-next-line
toMatrix(dataArr, 2);

// tslint:disable-next-line
toMatrix(dataArr, rowSizeNum);*/