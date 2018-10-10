import { interval, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';

//const sequence$: Observable<number> = from([1, 2, 3, 4, 5]);

// class DoubleSubscriber extends Subscriber<number> {
//     public _next(value: number) {
//         this.destination.next && this.destination.next(value * 2);
//     }
// }
//
// const double = (source: Observable<number>) => {
//     return source.lift({
//         call(subscribe: Subscriber<number>) {
//             source.subscribe(new DoubleSubscriber(subscribe));
//         }
//     });
// };
//
// sequence$.pipe(double)
//     .subscribe((value: number) => {
//         console.log(value);
//     });


// class MultiplySubscriber extends Subscriber<number> {
//
//     private readonly num: number;
//
//     public constructor(subscribe: Subscriber<number>, num: number) {
//         super(subscribe);
//         this.num = num;
//     }
//
//     public _next(value: number) {
//         this.destination.next && this.destination.next(value * this.num);
//     }
// }
//
// const multi = (num: number) => (source: Observable<number>) => {
//     return source.lift({
//         call(subscribe: Subscriber<number>) {
//             source.subscribe(new MultiplySubscriber(subscribe, num));
//         }
//     });
// };
//
// sequence$.pipe(multi(3))
//     .subscribe((value: number) => {
//         console.log(value);
//     });
// customMap((x)=>x*4)

const sequence$ = interval(1000)
    .pipe(take(4));


const hightOrderObservable = sequence$.pipe(
    tap((x) => {
        console.log(`X=> ${x}`);
        return x * 3;
    }),
    mergeMap((_x: number) => {
        console.log(`_x=> ${_x}`);
        return of(1, 2);
    }),
);

hightOrderObservable.subscribe((x) => console.log(x));