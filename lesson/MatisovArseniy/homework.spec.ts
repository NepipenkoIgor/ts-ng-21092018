import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('isInArray function', () => {
    const filledArray = [1, 2, 3, 4, 5];

    it('should return false if checked arguments are not in Array', () => {
       const result = isInArray(filledArray, 6, 7, 8);
       expect(result).toBeFalsy();
    });

    it('should return true if checked arguments are in Array', () => {
        const result = isInArray(filledArray, 1, 3, 5);
        expect(result).toBeTruthy();
    });
});

describe('summator function', () => {
    it('should return sum of numbers', () => {
        const result = summator(1, 2, 3, 4);
        expect(result).toEqual(10);
    });

    it('should return concatenated string from strings ', () => {
        const result = summator('hello', 'there', '!');
        expect(result).toEqual('hellothere!');
    });

    it('should sum numbers before first string and after concatenate', () => {
        const result = summator(1, 2, 3, 4, 'hello', 'there', '!', 111, 1);
        expect(result).toEqual('10hellothere!1111');
    });
});

describe('getUnique function', () => {
    it('should return unique passed arguments in right order', () => {
        const result = getUnique(1, 5, 1, 55, 6, 7, 1, 55, 2);
        expect(result).toEqual([1, 5, 55, 6, 7, 2]);
    });
});

describe('toMatrix', () => {
    const testArray: number[] = [1, 2, 3, 4, 5, 6, 7];

    it('should split array [1-7] onto three arrays by length 3', () => {
        const result = toMatrix(testArray, 3);
        expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    it('should return the same array if row = its length', () => {
        const result = toMatrix(testArray, 7);
        expect(result).toEqual([testArray]);
    });
});