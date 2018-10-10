## Initial Setup
```
npm init -y
npm add typescript -D
node_modules/typescript/lib/*.ts # language definitions
```

Creates compiler options for typescript in the file `tsconfig.json`:
```
node_modules/.bin/tsc --init # 
```
"target" - what language standard to compile ("transpile") into

`tsconfig.json` can be in context of a directory
```
"extends": "../../tsconfig.json",
"include": ["./main.ts"]
```

### Tslint

Add coding style checks:
```
npm add tslint -D
./node_modules/.bin/tslint --init
```

In IDE (Storm) Preferences -> search Tslint plugin -> Enable

`tslint.json` can be edited to adjust rules. For example, tslint:disable-next-line - allows to override tslint warnings

```
./node_modules/.bin/tslint 'path...' # runs the tslint analysis against specified path
```

Can also add an alias to `package.json`:
```
"scripts": {
    "lint: "./node_modules/.bin/tslint 'path...'"
}

```

`package.json` also has "pre-commit" hook e.g.:
```
"pre-commit": [
    "lint"
]
```

### Run Compilation

```
./node_modules/.bin/tsc
```

By default will show errors, but compile anyway. Can add `noemitOnError: true` to the compiler config to prevent compilation if there are errors found.

## TypeScript

Две области декларации: виртуальные и реальные.

- "виртуальные" - относится к тайпскрипту и не существует в джаваскрипте
- "реальные" - непосредственно язык джаваскрипт

Нельзя реальным элементам присваивать виртуальные значения и наоборот
```typescript
let p2: Account; // импорт типа при декларации, форсит тип
let a: string;
let b: number = 1;
let c = true; // неявный захват типа, не рекомендуется
```

Переопределение типа в рантайме бьет по производительности.


To enable support of typescript language without compilation (or compiles just before execution):
```
npm add ts-node
./node_modules/.bin/ts-node file.ts # executes the typescript file
```

Большие приложения не рекомендуется писать на обычном джаваскрипте. Настоятельно рекомендуется ts.

### Basic Types

Can allow nulllable:
```
let b: number | null = 1; # in tsconfig.json uncomment more strict checks
```

Can allow any (weak typing):
```
let a: any = 1;
```

The "void" type is intended for return type declarations, but still can be misused
```
let c: void = undefined; # will be caught by tslint
```

"lambda"-style type declaration:
```
let account: {
    firstName: string;
    age?: number; # optional field
};
```

### Constants, Readonly
`const` protects variable assignment from reassignment:
```
const account: ...
```

`readonly` prevents property to be reassigned (works similar to const, but within type definition):
```
const account: {
    readonly dateOfBirth: ...
}
```

### Complex Types
Array of strings:
```
let emails: string[];
let e: Array<string>; # similar way, explicit, but not recommended for primitive types
```

There are some helper type definitions in es5 standard. For example `ReadOnlyArray<string>` etc. For example, "Partial" modifier - this is called "generic" (to be discussed later)

Another example - how to define a tuple:
```
let tuple: [string, number] = ['sd', 1];
```

Object signature:
```
let obj: {[t: string]: true} = {
    a: true,
    b: false # not gonna work, as type must be exactly true -- change to "boolean" in the type definition
};
```

Define type alias:
```
type ACCT = {
    firstName?: string,
    age?: number,
    readonly info: {
        readonly action: string,
    },
};
```
But this is not recommended, use interface instead (for classes)

### Interfaces

Example of usage of interface instead of type
```
interface IACCT {
    firstName?: string;
    age?: number;
    readonly info: {
        readonly action: string;
    };
}

class Account implements IACCT {
    public firstName = 'Anton';
    public age: number;
    public info;
}
```

Interface is particular case of types. Interface can extend a type.

### Generics

Generic is a generalization of type parameters for example:
```
type IFirstName<T> = {
    firstName: T;
    getStatic(): { name: string };
};
```

A good example is to inspect `Array<T>` in the standard library.

Another example that limits definition of type:
```
type Info<T extends {name: string, age: number}> = {
    info: T;
};
let p1: Info<{name: string, age: number, female: boolean}>; // can extend a type
```

Variadic parameters:
```
function average(...a: number[]): string {
    const [c, b, d] = a;
    const total = c + b + d;
    return `Average is ${total / 3}`;
}
```

Another example:
```
function average(...a: [number, number, number]): string {
```

### Overloading

```
function f(a: number, b: string): number; // note no function body
function f(a: string, b: string, c: number): string;

// now implementation
function f(a: number | string, b: string, c?: number): string {
    return 's';
}

f(1, '2');
f('1', '2');
f(1, '2', 1);
```
