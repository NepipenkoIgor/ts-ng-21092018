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
var is_in_array_function_1 = require("./is-in-array.function");
function getUnique(first) {
    var moreArrays = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        moreArrays[_i - 1] = arguments[_i];
    }
    var e_1, _a, e_2, _b;
    var result = [];
    var all = [];
    all = all.concat(first);
    try {
        for (var moreArrays_1 = __values(moreArrays), moreArrays_1_1 = moreArrays_1.next(); !moreArrays_1_1.done; moreArrays_1_1 = moreArrays_1.next()) {
            var arr = moreArrays_1_1.value;
            all = all.concat(arr);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (moreArrays_1_1 && !moreArrays_1_1.done && (_a = moreArrays_1.return)) _a.call(moreArrays_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var all_1 = __values(all), all_1_1 = all_1.next(); !all_1_1.done; all_1_1 = all_1.next()) {
            var el = all_1_1.value;
            if (!is_in_array_function_1.isInArray(result, el)) {
                result.push(el);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (all_1_1 && !all_1_1.done && (_b = all_1.return)) _b.call(all_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
exports.getUnique = getUnique;
