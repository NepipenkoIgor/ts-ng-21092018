// let a = 3;
// let b = 10 * a;
// console.log(b);
//
// a = 4;
// console.log(b);

// import { from, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
//
// const sequenceA$: Observable<number> = from([3, 4, 5]);
// const sequenceB$: Observable<number> = sequenceA$.pipe(
//     map((a: number) => {
//         return a * 10;
//     })
// );
//
// // sequenceA$.subscribe((a) => {
// //     console.log(a);
// // });
// //
// sequenceB$.subscribe((b) => {
//     console.log(b);
// }, (_err) => {}, () => {
//     console.log('done');
// });
//
// import { interval, Observable, Observer, of } from 'rxjs';
// import { concat, filter, map, startWith, take } from 'rxjs/operators';

// let count = 0;
// const interval1 = setInterval(() => {
//     count++;
// }, 1000);

// const sequence$ = Observable.create((observer: Observer<number>) => {
//     let count = 0;
//     const interval = setInterval(() => {
//         console.log('interval');
//         observer.next(count++);
//         if (count === 9) {
//             observer.complete();
//             clearInterval(interval);
//         }
//     }, 1000);
// });

// const sequence2$ = of('100', '200');

// sequence$
//     .pipe(
//         startWith(300),
//         map((x: number) => x * 2),
//         filter((x: number) => x % 3 === 0),
//         take(2),
//         concat(sequence2$)
//     )
//     .subscribe((value: number | string) => {
//         console.log(`Next 1 => ${value}`);
//     }, () => {}, () => {
//         console.log('completed');
//     });

// setTimeout(() => {
//     sequence$.subscribe((value: number) => {
//         console.log(`Next 2 => ${value}`);
//     });
// }, 7000);

//
// import { interval } from 'rxjs';
// import { take, withLatestFrom } from 'rxjs/operators';
//
// const foo$ = interval(300)
//     .pipe(take(4));
// const bar$ = interval(500)
//     .pipe(take(4));
// foo$.pipe(withLatestFrom(bar$))
//     .subscribe(([valFoo, valBar]) => {
//         console.log(`valFoo => ${valFoo} & valBar => ${valBar}`);
//     });

// import { interval, Observable, of } from 'rxjs';
// import { delay, map, retryWhen, zip } from 'rxjs/operators';

// --1--2--3--4--
//
// ----a---c---
// zip
// ----1,a---2,c


// const sequence1$ = of('a', 'b', 'c', 1);
//
// const sequence2$: Observable<string> = interval(500)
//     .pipe(zip<unknown, string>(sequence1$, (_x: number, y: string) => y));
//
//
// const result$ = sequence2$.pipe(map((x: string) => x.toUpperCase()));
//
// result$
//     .pipe(
//         retryWhen((errObs) => errObs.pipe(delay(2000)))
//         // catchError((err, out) => {
//         //     console.log(`Err => ${err}`);
//         //     return out;
//         // })
//     )
//     .subscribe((v: string) => {
//         console.log(v);
//     });