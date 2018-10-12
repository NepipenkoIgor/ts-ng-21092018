import { getUnique, isInArray, summator, toMatrix } from './homework-1';

describe('test functions', () => {

  describe('isInArray', () => {

    it('isInArray should return false', () => {
        const result = isInArray([1, 'hoh', 3, 4, 5, 6], 2, 3, 4);
        expect(result)
            .toBeFalsy();
    });

    it('isInArray should return true', () => {
        const result = isInArray([1, 2, 3, 4, 5, 6], 2, 3, 4);
        expect(result)
            .toBeTruthy();
    });
  });

  describe('summator', () => {

    it('summator should sum numbers', () => {
        const result = summator(1, 2, 3, 4);
        expect(result)
            .toBe(10);
    });

    it('summator should sum numbers and strings', () => {
        const result = summator(1, 10, 2, '3');
        expect(result)
            .toBe(16);
    });

    it('summator should sum numbers and strings', () => {
        const result = summator(1, 'hoh', 2, '3');
        expect(result)
            .toBe(6);
    });
  });

  describe('getUnique', () => {

    it('getUnique should work properly', () => {
        const result = getUnique(1, 2, 3, 3, 'four', 5, 'four', 6, 'six', 6);
        expect(result)
            .toEqual([1, 2, 3, 'four', 5, 6, 'six']);
    });
  });

  describe('toMatrix', () => {

    it('toMatrix should work in the case elements 7 and rowSize 3', () => {
        const result = toMatrix([1, 2, 3, 4, 5, 6, 7], 3);
        expect(result)
            .toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    it('toMatrix should work in the case elements 7 and rowSize 4', () => {
        const result = toMatrix([1, 2, 3, 4, 5, 6, 7], 4);
        expect(result)
            .toEqual([[1, 2, 3, 4], [5, 6, 7]]);
    });
  });
});
