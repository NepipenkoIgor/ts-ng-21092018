import { isInArray, sum, summator, getUnique, toMatrix } from './homework';

describe('test functions', () => {
  describe('isInArray', () => {
    it('isInArray should return false', () => {
        const result = isInArray([1, 2, 3], 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });
    it('isInArray should return true', () => {
        const result = isInArray([1, 'a', 3, 'b'], 1, 'b');
        expect(result)
            .toBeTruthy();
    });
  });
  describe('sum', () => {
    it('sum of numbers', () => {
        const result = sum(1, 2);
        expect(result)
            .toBe(3);
    });
    it('sum of strings', () => {
      const result = sum('1', '2');
      expect(result)
          .toBe('12');
    });
  });
  describe('summator', () => {
    it('sum of numbers', () => {
        const result = summator(1, 2, 3, 4);
        expect(result)
            .toBe(( 1 + 2 + 3 + 4 ));
    });
    it('sum of strings', () => {
      const result = summator('a', 'b', 'c', 'd');
      expect(result)
          .toBe('abcd');
    });
  });
  describe('getUnique', () => {
    it('should work properly', () => {
        const result = getUnique([1, 2, 'a', 'b', 2, 'c', 'a', 3, 'b']);
        expect(result)
            .toEqual([1, 2, 'a', 'b', 'c', 3]);
    });
  });
  describe('toMatrix', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('matrix with 0 rows', () => {
        const result = toMatrix(arr, 0);
        expect(result)
            .toEqual([arr]);
    });
    it('matrix with 1 rows', () => {
        const result = toMatrix(arr, 1);
        expect(result)
            .toEqual([[ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ]]);
    });
    it('matrix with 3 rows', () => {
        const result = toMatrix(arr, 3);
        expect(result)
            .toEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]);
    });
    it('matrix with with 3 rows and extra elements', () => {
        const result = toMatrix([...arr, 10, 11], 3);
        expect(result)
            .toEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11 ]]);
    });
  });
});