import { isInArray } from './main';
import { summator } from './main';
import { getUnique } from './main';

describe('test functions ', () => {
    it('isInArray should work', () => {
        const result = isInArray([1, 2, 3], 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });
    it('isInArray should work', () => {
        const result = isInArray([1, 2, 3], 1, 3);
        expect(result)
            .toBeTruthy();
    });
});

describe('test functions ', () => {
    const sum: number = 9;
    it('summator should work', () => {
        const result = summator(1, 1, 1, '3', 3);
        expect(result)
            .toEqual(sum);
    });
});

describe('test functions ', () => {
    it('getUnique should work', () => {
        const result = getUnique(1, 1, 2, '0', 3, 4, 5, 'c', 9);
        expect(result)
            .toEqual([1, 2, '0', 3, 4, 5, 'c', 9]);
    });
});