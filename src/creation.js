import { of, from, Observable, fromEvent, range, timer, interval } from "rxjs";
import { scan, map } from "rxjs/operators";

// const stream$ = of(1, 2, 3, 4);

// const arr$ = from([1, 2, 3, 4])
//     .pipe(
//         scan((acc, v) => acc.concat(v), [])
//     ).subscribe(val => console.log(val));

// const stream$ = new Observable(observer => {

//         observer.next('First Value');

//         setTimeout(() => observer.next('Value after 1 second'), 1000);

//         setTimeout(() => observer.complete(), 1500);

//         setTimeout(() => observer.error('ERROR after 2 seconds'), 2000);

// },)

// stream$.subscribe({
//     next: val => console.log(val),
//     error: err => console.error(err),
//     complete: () => console.log('COMPLETE after 1.5 seconds'),
// });

// fromEvent(document.querySelector("canvas"), "mousemove")
//   .pipe(
//     map((e) => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext("2d"),
//     }))
//   )
//   .subscribe((pos) => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });


// const clear$ = fromEvent(document.querySelector('.btn'), 'click')

// clear$.subscribe(() => {
//     const canvas = document.querySelector("canvas");
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// })

// const sub = interval(1000).subscribe(v => console.log(v + 1));

// setTimeout(() => sub.unsubscribe(), 3000);