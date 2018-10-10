import  { getUnique, isInArray, summator, toMatrix } from './main';

describe('test functions', () => {
    it('isInArray Should return False', () => {
        const result = isInArray([1, 2, 3], 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });
    it('isInArray should return True', () => {
        const result = isInArray([1, 2, 3, 's', true], 2, 's', true);
        expect(result)
            .toBeTruthy();
    });
    it('summator should be equal 28', () => {
        const result = summator('1', 2, 3, 's', '12', 10, 'asd213', false);
        expect(result)
            .toBe(28);
    });
    it('getUnique should be equal [ \'we123\', 1, true, 2, \'a\', \'b\', \'ab\', 5, false ]', () => {
        const result = getUnique('we123', 1, 1, true, true, 2, 'a', 'b', 'a', 'a', 'ab', 5, false);
        expect(result)
            .toEqual([ 'we123', 1, true, 2, 'a', 'b', 'ab', 5, false ]);
    });
    it('toMatrix should be equal [ [ 1, 2, 3 ], [ \'s\', 4, 5 ], [ 7, \'ssa\', 8 ], [ 9 ] ]', () => {
        const result = toMatrix([1, 2, 3, 's', 4, 5, 7, 'ssa', 8, 9], 3);
        expect(result)
            .toEqual([ [1, 2, 3], ['s', 4, 5], [7, 'ssa', 8], [9] ]);
    });

});
