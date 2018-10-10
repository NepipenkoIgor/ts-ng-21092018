type ns  = string | number;

/**
 * Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 */
export function isInArray(arr: number[], ...args: number[]): boolean {
    let res: boolean = true;

    args.forEach((arg: number) => {
        if (arr.indexOf(arg) === -1 ) {
            res = false;
        }
    });

    return res;
}

// tslint:disable-next-line
console.log(isInArray([1, 2, 3], 1, 2, 3)); //true
// tslint:disable-next-line
console.log(isInArray([1, 2, 3], 1, 2, 3, 4, 5)); //false

/**
 * Написать функцию summator(), которая суммирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */
export function summator(...args: (number | string)[]): number {
    let res: number = 0;

    args.forEach((arg: number | string) => {
        if (typeof arg === 'number') {
            res += arg;
        } else if (typeof arg === 'string') {
            const val: number = parseInt(arg);
            if (!isNaN(val)) {
                res += val;
            }
        }
    });

    return res;
}

// tslint:disable-next-line
console.log(summator(1, 2, 3)); //6
// tslint:disable-next-line
console.log(summator(1, 2, "t3", "4")); //7

/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
export function getUnique(...args: ns[]): ns[] {
    const res: ns[] = [];

    args.forEach((arg: number | string) => {
        if (res.indexOf(arg) === -1 ) {
            res.push(arg);
        }
    });

    return res;
}

// tslint:disable-next-line
console.log(getUnique(1, 2, 3, 1, 2, 4, 5)); //[1, 2, 3, 4, 5]
// tslint:disable-next-line
console.log(getUnique("1", 2, "n", 4, "1", 5)); //['1', 2, 'n', 4, 5]

/**
 * Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 * возвращает новый массив. Число показывает количество элементов в подмассивах,
 * элементы подмассивов беруться из массива data.
 * Оригинальный массив не должен быть изменен.
 */
export function toMatrix(data: ns[], rowSize: number): ns[][] {
    const res: ns[][] = [];
    let tmp: ns[] = [];
    data.forEach((el: ns) => {
        if (tmp.length === rowSize) {
            res.push(tmp);
            tmp = [];
        }
        tmp.push(el);
    });

    if (tmp.length > 0) {
        res.push(tmp);
    }

    return res;
}

// tslint:disable-next-line
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8], 3));//[[1, 2, 3], [4, 5, 6], [7, 8]]
// tslint:disable-next-line
console.log(toMatrix([1, 2, "3", "t4", 5, 6, 7, 8], 3));//[[1, 2, '3'], ['t4', 5, 6], [7, 8]]