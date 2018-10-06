import { isInArray } from './is-in-array.function';

export function getUnique<T>(first: T[], ... moreArrays: T[][]): T[] {
    const result: T[] = [];
    let all: T[] = [];
    all = all.concat(first);
    for (const arr of moreArrays) {
        all = all.concat(arr);
    }
    for (const el of all) {
        if (!isInArray(result, el)) {
            result.push(el);
        }
    }
    return result;
}
