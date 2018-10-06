"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(haystack, first) {
    var needles = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        needles[_i - 2] = arguments[_i];
    }
    var e_1, _a;
    var all = [];
    all.push(first);
    all = all.concat(needles);
    try {
        for (var all_1 = __values(all), all_1_1 = all_1.next(); !all_1_1.done; all_1_1 = all_1.next()) {
            var el = all_1_1.value;
            if (haystack.indexOf(el) === -1) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (all_1_1 && !all_1_1.done && (_a = all_1.return)) _a.call(all_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
exports.isInArray = isInArray;
