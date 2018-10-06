import { isInArray } from './is-in-array.function';
import { summator } from './summator.function';
import { getUnique } from './get-unique.function';
import { toMatrix } from './to-matrix.function';

console.log('isInArray()');
// isInArray([]); // not gonna work, missing mandatory 2nd parameter
console.log(isInArray([], 1));
console.log(isInArray<number>([], 1, 2)); // empty array is implicitly any[]?
console.log(isInArray(['foo', 'bar'], 'foo'));

console.log('summator()');
// summator(); // not allowed, must have at least 1
// summator(1, 'foo', 'bar'); // not allowed, must have all either number or all string
console.log(summator(1, 2, 3));
console.log(summator('foo', 'bar', 'baz'));

console.log('getUnique()');
// getUnique(); // not allowed, must have at least 1
console.log(getUnique([1, 2, 3], [1, 3, 5], [8, 13])); // [1, 2, 3, 5, 8, 13]
const a = {_: 1};
const b = {_: 2};
const c = {_: 3};
console.log(getUnique([a, b], [b, c])); // [a, b, c]

console.log('toMatrix()');
// toMatrix(); // nope
// toMatrix([1, 2, 3]); // nope
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]]
