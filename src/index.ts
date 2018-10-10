// import { fromEvent } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
//
// const clickSequence$ = fromEvent(document, 'click');
//
// function request() {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((res) => res.json());
// }
//
// const requestSequence$ = clickSequence$.pipe(
//     switchMap((_click) => request()
//     )
// );
//
// requestSequence$.subscribe((email) => {
//     console.log(email);
// });

// Observable + Observer = Subject

//  controlSeauence$$ = new ReplaySubject();

// controlSeauence$$.subscribe((value => {
//     console.log(`A => ${value}`);
// }));

// controlSeauence$$.next(10);
// controlSeauence$$.next(11);
// controlSeauence$$.next(15);
//
// setTimeout(() => {
//     controlSeauence$$.subscribe((value => {
//         console.log(`C => ${value}`);
//     }));
//     // controlSeauence$$.complete();
// }, 2000);

// setTimeout(() => {
//     controlSeauence$$.subscribe((value => {
//         console.log(`B => ${value}`);
//     }));
// }, 5000);
// const controlSequence$$ = new Subject();
// const connectableSequence$: ConnectableObservable<number> = interval(1000)
//     .pipe(
//         // take(5),
//         tap((x) => {
//             console.log(x);
//         }),
//         // multicast(controlSequence$$),
//         publish(),
//     ) as ConnectableObservable<number>;
// const autoConnectableObserver  = connectableSequence$.refCount();
//
// const subA: Subscription = autoConnectableObserver.subscribe((value => {
//     console.log(`A => ${value}`);
// }));
// let subB: Subscription;
// setTimeout(() => {
//     subA.unsubscribe();
//     subB = autoConnectableObserver.subscribe((value => {
//         console.log(`B => ${value}`);
//     }));
//     // controlSeauence$$.complete();
// }, 2000);
//
// setTimeout(() => {
//     subB.unsubscribe();
//     // controlSeauence$$.complete();
// }, 4000);

//TODO windowTime, multicast

import { from } from 'rxjs';
import { map, observeOn } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { asap } from 'rxjs/internal/scheduler/asap';

let arr = [];
for (let i = 0; i < 5000; i++) {
    arr.push(i);
}
const sequence$ = from(arr);

console.log('start');
console.time('example');
sequence$.pipe(
    observeOn(asap),
    map(x => x * 2 / 4)
)
    .subscribe((_x) => {

    }, () => {}, () => {
        console.timeEnd('example');
    });
console.log('end');