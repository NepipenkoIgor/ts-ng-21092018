"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toMatrix(data, rowSize) {
    var result = [];
    var l = data.length;
    var chunk = [];
    for (var i = 0; i < l; i++) {
        for (var j = i; j < i + rowSize && j < l; j++) {
            if (j === i) {
                chunk = [];
            }
            chunk.push(data[j]);
        }
        result.push(chunk);
        i += rowSize - 1;
    }
    return result;
}
exports.toMatrix = toMatrix;
