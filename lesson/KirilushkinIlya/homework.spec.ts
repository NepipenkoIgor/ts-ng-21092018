import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('test isInArray function', () => {
  it('should return false', () => {
    const res = isInArray([1, 2, 3], 1, 2, 4);
    expect(res).toBeFalsy();
  });
  it('should return true', () => {
    const res = isInArray(['a', 'hello', 'js'], 'js', 'hello');
    expect(res).toBeTruthy();
  });
});

describe('test summator function', () => {
    it('should sum all numbers',  () => {
        const result = summator(1, 2, 3, 4);
        expect(result).toEqual(10);
    });
    it('should parse strings of digit symbols',  () => {
        const result = summator(1, '2', 3, '4');
        expect(result).toEqual(10);
    });
    it('should ignore strings with not digit symbols',  () => {
        const result = summator(1, '2$', 3, '4notNumber');
        expect(result).toEqual(4);
    });
    it('should return 0 for no args call',  () => {
        const result = summator();
        expect(result).toEqual(0);
    });
});

describe('test getUnique function', () => {
    it('should return only unique values', () => {
        const result = getUnique([1, 2, 3, 2, 4, 7, 1, 2]);
        expect(result.length).toEqual(5);
        const singleElem = result.filter( (elem: number) => elem === 2);
        expect(singleElem.length).toEqual(1);
    });

    it('should not change the order of elements', () => {
        const result = getUnique(['aloha', 'hello', 'hi', 'good day', 'hi', 'aloha']);
        expect(result.length).toEqual(4);
        expect(result[0]).toEqual('aloha');
        expect(result[3]).toEqual('good day');
    });
});

describe('test toMatrix function', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    it ('should return 3 subarrays', () => {
        const result = toMatrix(array, 3);
        expect(result.length).toEqual(3);
    });

    it ('last subarray\'s size should be 1', () => {
        const result = toMatrix(array, 3);
        const length = result.length;
        expect(length).toEqual(3);
        const last = result[length - 1];
        expect(last.length).toBe(1);
    });

    it ('should not change initial array', () => {
        toMatrix(array, 3);
        expect(array.length).toBe(7);
    });
});