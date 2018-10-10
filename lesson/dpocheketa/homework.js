"use strict";
exports.__esModule = true;
function isInArray(source) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return values.every(function (value) {
        return source.indexOf(value) >= 0;
    });
}
exports.isInArray = isInArray;
var arr = [1, 2, 3, 4, 5];
isInArray(arr, 1, 2, 3);
function summator() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var initialValue;
    if (typeof values[0] === 'string') {
        initialValue = '';
    }
    else {
        initialValue = 0;
    }
    return values.reduce(function (result, currentValue) {
        return add(result, currentValue);
    }, initialValue);
}
exports.summator = summator;
summator(1, 2, 'x');
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = [];
    for (var i = 0; i < args.length; i++) {
        if (result.indexOf(args[i]) === -1) {
            result.push(args[i]);
        }
    }
    return result;
}
exports.getUnique = getUnique;
getUnique(1, 2, 3, '3', 5);
function toMatrix(data, rowSize) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var item = new Array(rowSize);
        // @ts-ignore
        result.push(item.fill(data[i]));
    }
    return result;
}
exports.toMatrix = toMatrix;
toMatrix([1, 2, '3'], 2);
