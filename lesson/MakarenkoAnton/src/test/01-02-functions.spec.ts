// import 'jasmine'; // for IDE - fixes highlighting, but crashes when running tests
import { isInArray } from '../is-in-array.function';
import { summator } from '../summator.function';
import { getUnique } from '../get-unique.function';
import { toMatrix } from '../to-matrix.function';

describe('isInArray()', () => {
    it('empty array and 1 argument', () => {
        expect(isInArray([], 1)).toBeFalsy();
    });
    it('empty array and multiple arguments', () => {
        expect(isInArray<number>([], 1, 2)).toBeFalsy(); // empty array is implicitly any[], that's why using <number>
    });
    it('a false', () => {
        expect(isInArray([1, 2, 3], 3, 4, 5)).toBe(false); // no problem when it is not empty
    });
    it('a true', () => {
        expect(isInArray(['foo', 'bar'], 'foo')).toBe(true);
    });
});

describe('summator()', () => {
    it('integers', () => {
        expect(summator(1, 2, 3)).toBe(6);
    });
    it('strings', () => {
        expect(summator('foo', 'bar', 'baz')).toBe('foobarbaz');
    });
});

describe('getUnique()', () => {
    it ('primitives', () => {
        expect(getUnique([1, 2, 3], [1, 3, 5], [8, 13])).toEqual([1, 2, 3, 5, 8, 13]);
    });

    it ('objects', () => {
        const a = {_: 1};
        const b = {_: 2};
        const c = {_: 3};
        expect(getUnique([a, b], [b, c])).toEqual([a, b, c]);
    });
});

describe('toMatrix', () => {
    it ('some matrix', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]];
        expect(toMatrix(input, 3)).toEqual(expected);
    });
});
