// interface IAccount {
//     firstName: string;
//     age: number;
// }
// let person = IAccount;

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

class MathLib {
    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

// tslint:disable-next-line
function logMethod(_target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDesc = descriptor.value;
    return {
        ...descriptor,
        // tslint:disable-next-line
        value: (...args: any[]) => {
            // tslint:disable-next-line
            const b = args.map((v: any) => JSON.stringify(v))
                .join();
            const result = originalDesc(args);
            const r = JSON.stringify(result);
            // tslint:disable-next-line
            console.log(`Call: ${key}(${b})=>${r}`);
            return result;
        }
    };
}

let m = new MathLib();
m.areaOfCircle(100);
m.areaOfCircle(2);
m.areaOfCircle(55);
