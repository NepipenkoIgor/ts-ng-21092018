## RxJS

```
npm add rxjs
```

RxJS use case combines iterator and observer pattern in one. Sometimes they call it a "lodash" alternative (?)

see http://rxmarbles.com/ - a set of interactive diagrams of Rx Observables

Example:
```typescript
let a = 3;
let b = 10 * a;
console.log(b); // 30

a = 4;
console.log(b); // 30
```

We would like to make it so that b value to get updated when a is updated as well.
```typescript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const sequenceA$ = of(3, 4); // Observable<T>
const sequenceB$ = sequenceA$.pipe( // also Observable<T>
    map(a => a * 10)
);
sequenceB$.subscribe((b) => {
    console.log(b);
});
// outputs 30, then 40

sequenceA$.subscribe((v) => {
    console.log(v);
});
```

"$" suffix is a naming convention for variables that contain "observables" (or "streams").
```
a => a // shortcut for "arrow function"

(a) => return a * 10

// same as above
(a: number) => {
    return a * 10;
}
```

Can also subscribe to different stuff like promises or events:
```typescript
import { fromPromise, fromEvent } from 'rxjs/internal-compatibility';
```

### Custom Stream

A generalized way to create streams:

```typescript
import { Observable, Observer } from 'rxjs';

const sequence$ = Observable.create((observer: Observer<number>) => {
    let count = 0;
    const interval = setInterval(() => {
        observer.next(count++);
        // infinite, unless break as follows:
        if (count === 5) {
            observer.complete(); // this breaks the sequence
            clearInterval(interval); // frees resources to avoid memory leak
        }
    }, 1000);
});
sequence$.subscribe((value: number) => {
    console.log(value);
});
```

"Hot" vs "Cold" streams:
- Cold is when subscriber starts getting initial values. Or when "producer" is "inside" of "observable"
- Hot is when subscriber starts getting an already modified values (possibly affected by other streams)

READ and try: creating multiple streams and see their interaction.

### Stream Operators

startWith() - initial values
map() - applies a callback to the value
filter() - filters output based on input
concat() - adds a stream to the existing stream
take() - ?
interval() - an alternative to setInterval() but safe from memory leaks

For example, see class work.

Another example:
```typescript
import { interval } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

const foo$ = interval(300)
    .pipe(take(4));
const bar$ = interval(500)
    .pipe(take(4));
foo$.pipe(withLatestFrom(bar$))
    .subscribe(([valFoo, valBar]) => {
        console.log(`valFoo => ${valFoo} & valBar => ${valBar}`);
    });
```

### Error Handling


(broken example, see class work)
```typescript
import { interval, Observable, of, catchError } from 'rxjs';
import { zip, map } from 'rxjs/operators';

let sequence1$ = of('a', 'b', 'c', 1);
let sequence2$: Observable<string> = interval(500)
    .pipe(
        zip<unknown, string>(sequence1$, (x: number, y: string) => y)
    );
let result$ = sequence2$.pipe(map((x: string) => x.toUpperCase()));

// toUpperCase() should throw an error when x is not a string

// here is how to handle error:

result$
    .pipe(
        catchError((err, out) => {
            console.log(`Err => ${err}`);
            return out; // returns original stream - this way it will be indefinite
        })
    )
    .subscribe((v: string) => {
        console.log(v);
    });
```

Other operators:
- retry()
- retryWhen()
- delay()
