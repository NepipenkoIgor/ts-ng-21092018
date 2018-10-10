/**
 * Возвращает true, если все аргументы, начиная со 2-го входят в исходный массив.
 * @param source Исходный массив.
 * @param other Остальные аргументы, которые проверяем.
 */
function isInArray<T>(source: T[], ...other: T[]): boolean {
    const hasInArray = other.every(value =>
        source.indexOf(value) !== -1);

    return hasInArray;
}

function checkIsInArray(): void {
    const source = [1, 2, 3, 4, 5, 'a', 'b', 'c'];
    const other1 = [1, 5, 'b'];
    const other2 = [6, 2, 'd'];

    console.log('Вызов isInArray');
    console.log('Source: ', source);
    console.log('Other 1: ', other1);
    console.log('Other 2: ', other2);
    console.log('Проверяем other 1: ', isInArray(source, ...other1));
    console.log('Проверяем other 2: ', isInArray(source, ...other2));
    console.log('');
}


type StringOrNumber = string | number;

/**
 * Возвращает склеенную строку.
 * @param array Массив строк.
 */
function summator(...array: string[]): string;
/**
 * Возвращает сумму чисел.
 * @param array Массив чисел.
 */
function summator(...array: number[]): number;
function summator(...array: StringOrNumber[]): StringOrNumber {
    const initialValue = typeof array[0] === 'string'
        ? ''
        : 0;
    const result = array.reduce(function (sum, currentValue): StringOrNumber {
        return add(sum, currentValue);
    }, initialValue);

    return result;
}

function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

function checkSummator(): void {
    const numberArgs = [1, 5, 10, 2, 4];
    const stringArgs = ['Привет', ' ', 'всем в этом ', 'чатике!'];

    console.log('Вызов summator');
    console.log('numberArgs: ', numberArgs);
    console.log('stringArgs: ', stringArgs);
    console.log('Summator for numbers:', summator(...numberArgs));
    console.log('Summator for strings:', summator(...stringArgs));
    console.log('');
}


/**
 * Возвращает массив, состоящий из уникальных элементов массива array.
 * @param array Массив значений.
 */
function getUnique<T>(...array: T[]): T[] {
    const newArray: T[] = [];

    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

function checkGetUnique(): void {
    const source = [1, 5, 10, 2, 4, 3, 2, 1, 24];

    console.log('Вызов getUnique');
    console.log('Source: ', source);
    console.log('GetUnique for Source:', getUnique(...source));
    console.log('');
}

/**
 * Возвращает новый массив-матрицу, разбитый на строки из исходного массива.
 * @param data Элементы исходного массива.
 * @param rowSize Размер строки - количество элементов в подмассивах.
 * @example
 * ```typescript
 const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const rowSize1 = 5;
 const rowSize2 = 3;

 toMatrix(data, rowSize1);
 // => [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]

 toMatrix(data, rowSize2);
 // => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 ```
 */
function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const matrixOutput: T[][] = [];
    const rowNumber: number = Math.ceil(data.length / rowSize);

    for (let i = 0; i < data.length; i += rowSize) {
        const row: T[] = data.slice(i, i + rowSize);
        matrixOutput.push(row);
    }

    return matrixOutput;
}

function checkToMatrix(): void {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rowSize1 = 5;
    const rowSize2 = 3;

    console.log('Вызов toMatrix');
    console.log('Data', data);
    console.log(`toMatrix for rowSize = ${rowSize1}`, toMatrix(data, rowSize1));
    console.log(`toMatrix for rowSize = ${rowSize2}`, toMatrix(data, rowSize2));
    console.log('');
}

// ** Вызовы ** //

checkIsInArray();
checkSummator();
checkGetUnique();
checkToMatrix();

// Из папки Mednya-Vlad запуск компилятора ./../../node_modules/.bin/tsc
// Из той же папки запуск консоли ./../../node_modules/.bin/ts-node homework-1.ts