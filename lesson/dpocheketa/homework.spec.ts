import { getUnique, isInArray, summator } from './homework';

describe('isInArray', () => {
    it('should return true if all values present in array', () => {
        const result = isInArray([1, 2, 3, 6], 3, 2);
        expect(result)
            .toBeTruthy();
    });

    it('should return false if some of values not present in array', () => {
        const result = isInArray([1, 2, 3], 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });
});

describe('summator', () => {
    it('should return sum of numbers', () => {
        const result = summator(1, 2, 3);
        expect(result).toEqual(6);
    });

    it('should return concateneted string', () => {
        const result = summator('1', '2', '3');
        expect(result).toEqual('123');
    });

    it('should return concateneted result, if some value is a string', () => {
        const result = summator(1, 2, '3');
        expect(result).toEqual('33');
    });
});

describe('getUnique', () => {
    it('should return input array if there are all unique values', () => {
       const result = getUnique(1, 2, 3);
       expect(result).toEqual([1, 2, 3]);
    });

    it('should return input array without repeated values', () => {
        const result = getUnique(1, 2, 3, 2);
        expect(result).toEqual([1, 2, 3]);
    });
});
