"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_in_array_function_1 = require("./is-in-array.function");
var summator_function_1 = require("./summator.function");
var get_unique_function_1 = require("./get-unique.function");
var to_matrix_function_1 = require("./to-matrix.function");
console.log('isInArray()');
// isInArray([]); // not gonna work, missing mandatory 2nd parameter
console.log(is_in_array_function_1.isInArray([], 1));
console.log(is_in_array_function_1.isInArray([], 1, 2)); // empty array is implicitly any[]?
console.log(is_in_array_function_1.isInArray(['foo', 'bar'], 'foo'));
console.log('summator()');
// summator(); // not allowed, must have at least 1
// summator(1, 'foo', 'bar'); // not allowed, must have all either number or all string
console.log(summator_function_1.summator(1, 2, 3));
console.log(summator_function_1.summator('foo', 'bar', 'baz'));
console.log('getUnique()');
// getUnique(); // not allowed, must have at least 1
console.log(get_unique_function_1.getUnique([1, 2, 3], [1, 3, 5], [8, 13])); // [1, 2, 3, 5, 8, 13]
var a = { _: 1 };
var b = { _: 2 };
var c = { _: 3 };
console.log(get_unique_function_1.getUnique([a, b], [b, c])); // [a, b, c]
console.log('toMatrix()');
// toMatrix(); // nope
// toMatrix([1, 2, 3]); // nope
console.log(to_matrix_function_1.toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]]
