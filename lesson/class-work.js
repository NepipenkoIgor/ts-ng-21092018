"use strict";
// interface IAccount {
//     firstName: string;
//     age: number;
// }
// let person = IAccount;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// let account = {
//     firsName: 'Igor',
//     age: 32,
// };
//
// let person: typeof account;
// person = 1;
// class Account {
//
// }
//
// let p1 = Account;
// let p2: Account;
// let a: string;
// let b: number | null = 1;
// b = null;
// let c = true;
// c = 1;
// console.log(b + 2)
// let a: void = undefined;
//
// function desc(): void {
//
// }
//
// const account: {
//     readonly firstName: string,
//     age?: number
// } = {
//     firstName: 'Igor',
// };
//
//
// account.firstName = 'Vlad';
// type IFirstName<T> = {
//     firstName: T;
//
//     getStatic(): { name: string };
// };
//
// interface IAge<U> {
//     age: U;
//
//     getStatic(): { female: boolean };
// }
//
// interface IACCOUNT extends IFirstName<number>, IAge<string> {
//     readonly info: {
//         readonly action: string
//     };
//
//     getStatic(): { name: string, female: boolean };
// }
//
//
// type Info<T extends { name: string, age: number }> = {
//     info: T;
// };
//
// let p1: Info<{ name: string, age: number }>;
// let p2: Info<{ name: string, age: number, info: string }>;
// let p3: Info<{ name: string, age: number, female: boolean }>;
// let account1: IACCOUNT = {
//     info: {
//         action: 'action'
//     }
// };
//
// let account2: IACCOUNT;
//
//
// class Account implements IACCOUNT {
//     public firstName = 'Igor';
//     public age = 2;
//     public info = {
//         action: 'up'
//     };
// }
// account.info.action = 'new action';
//
// let emails: ReadonlyArray<string> = ['s', 'd'];
// emails.push('asd');
// emails[100] = 'ads';
// let tuple: [string, number] = ['sd', 1, 1];
// let cb: new (a: string) => number;
// let action: 'up' | 'down';
// action = 'up';
//
// let obj: { [t: string]: 4 } = {
//     a: 4,
//     b: 5
// };
// function average(...a: [number, number, number]): string {
//     const [c, b, d] = a;
//     const total = c + b + d;
//     return `Average is ${total / 3}`;
// }
//
// average(1, 2, 3);
// average(1, '2', 3);
// let result: number = average(1, 2, 3);
//
// function isString(a: number | string): a is string {
//     return typeof a === 'string';
// }
//
// function f(a: number, b: string): string;
// function f(a: string, b: string, c: number): string;
// function f(a: number | string, b: string, c?: number): string {
//     let total: number = 0;
//
//     if (isString(a)) {
//         total += parseInt(a);
//     } else {
//         total += a;
//     }
//
//     return 's';
// }
//
// f(1, '2');
// f('1', '2', 1);
// f(1, '2', 1);
// interface IPoint {
//     x: number;
// }
//
// class Point implements IPoint {
//
//     public x: number = 1;
//     protected y: number = 2;
//     private z: number = 3;
//
//     public constructor() {
//     }
//
//
//     public sum(): number {
//         return this.x + this.y + this.z;
//     }
// }
//
// let p = new Point();
// //
// class P1 extends Point {
//     public constructor() {
//         super();
//     }
//
//     public sum(): number {
//         return super.sum() + 1;
//     }
// }
// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {
//
//     }
//
//     public static getInstance() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// const ins1 = Singleton.getInstance();
// const ins2 = Singleton.getInstance();
// const ins3 = Singleton.getInstance();
// abstract class AbstractPoint {
//     public x: number = 0;
//     public abstract y: number;
//
//     public abstract sum(): number;
//
//     public getX(): number {
//         return this.x;
//     }
// }
//
// class Point1 extends AbstractPoint {
//     public y: number = 3;
//
//     public sum(): number {
//         return 2;
//     }
// }
var MathLib = /** @class */ (function () {
    function MathLib() {
    }
    MathLib.prototype.areaOfCircle = function (r) {
        return Math.PI * Math.pow(r, 2);
    };
    __decorate([
        logMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], MathLib.prototype, "areaOfCircle", null);
    return MathLib;
}());
// tslint:disable-next-line
function logMethod(_target, key, descriptor) {
    var originalDesc = descriptor.value;
    return __assign({}, descriptor, { 
        // tslint:disable-next-line
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // tslint:disable-next-line
            var b = args.map(function (v) { return JSON.stringify(v); })
                .join();
            var result = originalDesc(args);
            var r = JSON.stringify(result);
            // tslint:disable-next-line
            console.log("Call: " + key + "(" + b + ")=>" + r);
            return result;
        } });
}
var m = new MathLib();
m.areaOfCircle(100);
m.areaOfCircle(2);
m.areaOfCircle(55);
