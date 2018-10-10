import { isInArray } from './homework';
import { summator } from './homework';
import { getUnique } from './homework';
import { toMatrix } from './homework';


describe('test functions ', () => {
    it('isInArray should work', () => {
        const result = isInArray([1, 4, 5], 1, 4, 5);
        expect(result)
            .toBeTruthy();
    });
});

describe('test functions ', () => {
    let expected = 0;
    beforeEach(() => {
        expected = 6;
    });
    afterEach(() => {
        expected = 0;
    });
    it('summator should return 6', () => {
        const result = summator(1, 2, 3);
        expect(result)
            .toEqual(expected);
    });
});

describe('test functions ', () => {
    it('getUnique should return array of unique value', () => {
        const result = getUnique('a', 1, 'a', 2, '1');
        expect(result)
            .toEqual(['a', 1, 2, '1']);
    });
});

describe('test functions ', () => {
    it('toMatrix', () => {
        const result = toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
        expect(result)
            .toContain([1, 2, 3]);
    });
});