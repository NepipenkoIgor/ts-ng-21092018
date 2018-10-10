import { getUnique, isInArray, summator, toMatrix } from './main';

describe('test functions isInArray', () => {
    it('isInArray should work', () => {
        const result = isInArray([1, 2, 3], 1, 2, 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });

    it('isInArray should work', () => {
        const result = isInArray([1, 2, 3], 1, 2, 3);
        expect(result)
            .toBeFalsy();
    });
});

describe('test functions summator', () => {
    it('summator should work', () => {
        const result = summator(1, 2, 3);
        expect(result)
            .toEqual(6);
    });

    it('summator should work', () => {
        const result = summator(1, 2, 't3', '4');
        expect(result)
            .toEqual(7);
    });
});

describe('test functions getUnique', () => {
    it('getUnique should work', () => {
        const result = getUnique(1, 2, 3, 1, 2, 4, 5);
        expect(result)
            .toEqual([1, 2, 3, 4, 5]);
    });

    it('getUnique should work', () => {
        const result = getUnique('1', 2, 'n', 4, '1', 5);
        expect(result)
            .toEqual(['1', 2, 'n', 4, 5]);
    });
});

describe('test functions toMatrix', () => {
    it('toMatrix should work', () => {
        const result = toMatrix([1, 2, 3, 4, 5, 6, 7, 8], 3);
        expect(result)
            .toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });

    it('toMatrix should work', () => {
        const result = toMatrix([1, 2, '3', 't4', 5, 6, 7, 8], 3);
        expect(result)
            .toEqual([[1, 2, '3'], ['t4', 5, 6], [7, 8]]);
    });
});