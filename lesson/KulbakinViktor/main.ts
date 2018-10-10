/*
    Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.
 */

function isInArray<T>(arr: T[], ...args: T[]): boolean {
    let flag: boolean = true;
    args.forEach((arg: T) => {
        if (arr.indexOf(arg) === -1 ) {
            flag = false;
        }
    });
    return flag;
}

// tslint:disable-next-line
console.log('1. Результат - ' + isInArray([1, 2, 3], 1, 2));

/*
    писать функцию summator(), которая сумирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

function summator<T, S>(...args: (T|S)[]): number {
    let output: number = 0;

    args.forEach((arg: T|S) => {
        if (typeof arg === 'number') {
            output += arg;
        }
        if (typeof arg === 'string') {
            const stringOfNum: number = parseInt(arg);

            if (!isNaN(stringOfNum)) {
                output += stringOfNum;
            }
        }
    });

    return output;
}

// tslint:disable-next-line
console.log('2. Результат - ' + summator(1, 1, 1, '3', 3));

/*
    Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.
 */


function getUnique<T, S>(...args: (T|S)[]): (T|S)[] {
    const output: (T|S)[] = [];

    args.forEach((arg: T|S) => {
        if (output.indexOf(arg) === -1 )  {
            output.push(arg);
        }
    });
    return output;
}

// tslint:disable-next-line
console.log('3. Результат - ' + getUnique(1, 1, 2, '0', 3, 4, 5, 'c', 9));