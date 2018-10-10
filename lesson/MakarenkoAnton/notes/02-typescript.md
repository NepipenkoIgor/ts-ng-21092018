## Homework Review

Repeat about generics, how to use them in functions:
```
function getUnique<T>(... args: (T)[]): (T)[] {
...
}
```

enable strict in compiler config

summator() - redo, enable using types (generics)
isInArray() - fix concat warning

Q: В моей работе includes не сработали, не удалось правильно запустить main.ts в командной строке?
- A: "import" - это не инклуды вообще. RTFM (require?)
- A: надо явно указать путь до своего конфига. Типа ./node_modules/.bin/tsc -p ./lesson-2/KaralkouYury/tsconfig.json

Q: Есть ли возможность объявить тип: массив с одним или более элементов?
- A: нет

## Testing (Karma)

A typical setup for testing with Karma:

`karma.conf.js`
```
module.exports => (config) => {
    config.set({
        frameworks: ["jasmine": "karma-typescript"],
        files: [
            {patterm: "lesson/MakarenkoAnton/**/*.ts"}
        ],
        preprocessors: {
            "lesson/MakarenkoAnton/**/*.ts": []
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        singleRun: "true",
        ...
    })
}
```

```
npm add jasmine-core karma karma-jasmine karma-typescript karma-chrome-launcher -D
```
(-D stands for dev dependency)

In the original source code, before all functions, add "export" keyword

Example test suite: `main.spec.ts` - conventional name has suffix `.spec.ts`

http://microsoft.github.io/TypeSearch/ - type definitions library

Add definitions:
```
npm add @types/jasmine -D
```

The test case:
```
import (isInArray) from './homework';

describe ('test functions ', () => {
    ...
});
```

```
./node_modules/.bin/karma start
```

## Classes

Syntactic sugar on top of prototypical inheritance.

```typescript
class Point {
    public x: number = 1; // to pre-initialize defaults
    protected y: number;
    private z!: number; // developer to take care of it
    
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    public sum(): number {
        return this.x + this.y;
    }
}

const p = new Point();

```

Constructor is as any other function. Can use signature overloading, types...

A shortcut to prevent boilerplate code assignment in constructor:
```
public constructor(public x: number, public y: number) {
// no need to do this.x = x;...
}
```

Inheritance:
```
class P1 extends Point {
    public constructor() {
        super(); // parent constructor
    }
    
    public sum(): number {
        return super.sum(); // parent method
    }
}
```

Singleton example:
```typescript
class SingletonExample {
    private static instance: SingletonExample;
    
    private constructor() {
        
    }
    
    public static getInstance(): SingletonExample {
        if (!SingletonExample.instance) {
            SingletonExample.instance = new SingletonExample();
        }
        return SingletonExample.instance
    }
}
```

Abstract classes:
```typescript
abstract class AbstractPoint {
    public x: number = 0;
    public abstract y: number;
    
    public abstract sum(): number;
    
    public getX(): number {
        return this.x;
    }
}
```

## Decorators

Non-standard feature right now. Typescript-specific.

Look in node_modules definitions -> typescript -> lib -> lib.es5.ts

TODO: keyword "declare":
```
declare type ClassDecorator = <TFunction...
```

To enable static code analysis, enable "experimentalDecorators" in tsconfig.json

Example decorator:
```
clas MathLib {
    @logMethod // invocation of decorator
    public areaOfCirle(r: number): number {
        return (Math.PI * r) ** 2
    }
}

function logMethod(_target: any, key: string, descriptor: PropertyDescriptor) { // PropertyDescriptor - standard JavaScript interface
    const originalDesc = descriptor.value;
    return {
        ...descriptor,
        value: (...args: any[]) => {
            const b = args.map((v: any) => JSON.stringify(v))
                .join();
            const result = originalDesc(args);
            const r = JSON.stringify(result);
            console.log(`Call: ${key}(${b})=>${r}`);
            return result;
        }
    }
}

let m = new MathLib();
m.areaOfCircle(100);
m.areaOfCircle(2);
m.areaOfCircle(55);
```

```
./node_modules/.bin/ts-node lesson/class-work.ts

```

## Homework

- Refactor, fix up of class 1 homework
- Read typescript
- Read decorators
