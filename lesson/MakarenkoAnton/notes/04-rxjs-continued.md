In RxJs:
Producer - emits original events and iterator
Pipeline a set of "pipes" - observables to modify it 
.subscribe() - consumer

"Reactive Programming With RxJS" - read book.

## Custom Operator

How to implement your own operator:

```typescript
import { from, Observable, Subscriber } from 'rxjs';

const sequence$: Observable<number> = from([1, 2, 3, 4, 5]);

class DoubleSubscriber extends Subscriber<number> {
    public _next(value: number) {
        this.destination.next && this.destination.next(value * 2);
    }
}

// the operator
const double = (source: Observable<number>) => {
    return source.lift({
        call(subscribe: Subscriber<number>) {
            source.subscribe(new DoubleSubscriber(subscribe));
        }
    });
};

sequence$.pipe(double)
    .subscribe((value: number) => {
        console.log(value);
    });
```

Homework(1)

More examples demonstrating operators:
```typescript
import { interval, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';

const sequence$ = interval(1000)
    .pipe(take(4));

const highlightObservable = sequence$.pipe(
    // map((_x: number) => of(1, 2)),
    // mergeAll()

    // another way:
    // mergeMap((_x: number) => of(1, 2)),

    // use tap() to subscribe without changing anything
    tap((x) => {
        console.log(`X => ${x}`);
        return x * 3;
    }),
    mergeMap((_x: number) => {
        console.log(`_x => ${_x}`);
        return of(1, 2);
    }),
);
highlightObservable.subscribe((x) => console.log(x));

```

## Webpack

```
npm add webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin -D
```

Run the web server:
```
node_modules/.bin/webpack-dev-server 
```

### Uncontrolled Sequence

```typescript
import { fromEvent } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const clickSequence$ = fromEvent(document, 'click');

function request() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json());
}

const requestSequence$ = clickSequence$.pipe(
    // mergeMap(
    //     (_click) => request(),
    //     (_click, res) => res.email,
    //     2
    // )
    switchMap((_click) => request())
);
requestSequence$.subscribe((user) => {
    console.log(user);
});

```

mergeMap() -- get all
switchMap() - throttle, run one at a time only


### Controlled Sequence

controlSequence$$ -- naming convention $$ for controlled

Subject is Observable + Observer
```typescript
import { Observable, Subject } from 'rxjs';

// Subject is Observable + Observer

const controlSequence$$ = new Subject();

controlSequence$$.next(1);
controlSequence$$.next(3);
controlSequence$$.next(5);

controlSequence$$.subscribe((value => {
    console.log(value);
}));

controlSequence$$.next(10);
controlSequence$$.next(11);
controlSequence$$.next(15);

setTimeout(() => {
    controlSequence$$.next(100);
}, 5000);

```

BehaviorSubject - can have initial value and while it is not over, cache its value.
```typescript
import { BehaviorSubject } from 'rxjs';

// Subject is Observable + Observer

const controlSequence$$ = new BehaviorSubject(0);

controlSequence$$.subscribe((value => {
    console.log(`A => ${value}`);
}));

controlSequence$$.next(10);
controlSequence$$.next(11);
controlSequence$$.next(15);

setTimeout(() => {
    controlSequence$$.subscribe((value => {
        console.log(`B => ${value}`);
    }));
}, 5000);

```

AsyncSubject - ...
```typescript
import { AsyncSubject } from 'rxjs';

const controlSequence$$ = new AsyncSubject();

controlSequence$$.subscribe((value => {
    console.log(`A => ${value}`);
}));

controlSequence$$.next(10);
controlSequence$$.next(11);
controlSequence$$.next(15);

setTimeout(() => {
    controlSequence$$.subscribe((value => {
        console.log(`C => ${value}`);
    }));
    controlSequence$$.complete();
}, 2000);

setTimeout(() => {
    controlSequence$$.subscribe((value => {
        console.log(`B => ${value}`);
    }));
    controlSequence$$.complete();
}, 2000);

```

ReplaySubject - "охладить" горячий поток
```typescript
import { ReplaySubject } from 'rxjs';

const controlSequence$$ = new ReplaySubject(2);

controlSequence$$.next(10);
controlSequence$$.next(11);
controlSequence$$.next(15);

setTimeout(() => {
    controlSequence$$.subscribe((value => {
        console.log(`C => ${value}`);
    }));
    controlSequence$$.complete();
}, 2000);

```

Сделать "горячим" холодный поток

Холодный:
```typescript
import { take } from 'rxjs/operators';

const sequence$ = interval(1000)
    .pipe(
        take(5)
    );
sequence$.subscribe(value => {
    console.log(`A => ${value}`);
});

setTimeout(() => {
    sequence$.subscribe(value => {
        console.log(`B => ${value}`);
    });
}, 2000);
```

Как сделать горячим - см оператор multicast()
```typescript
... watch replay
```


publish() operator -- todo

## Homework
1. implement a custom operator customMap((x) => x * 4) - a similar to the map() that already exists in the library.
2. implement a live search on GitHub using rxjs
