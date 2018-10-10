import { isInArray } from './homework';

describe('test functions ', () => {
    it('isInArray should work', () => {
        const result = isInArray([1, 2, 3], 3, 4, 5);
        expect(result)
            .toBeFalsy();
    });
});