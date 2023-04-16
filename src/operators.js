import { interval, of } from 'rxjs';
import { map, filter, scan, tap, take, takeUntil, takeWhile } from 'rxjs/operators';

const stream$ = interval(1000)
    .pipe(
        tap((v) => console.log('TAP: ', v)),
        // map((v) => v * 3),
        // filter((v) => v % 9 === 0),
        // takeUntil((v) => v.value === 27),
        takeWhile(v => v < 7),
        // take(5),
    )

stream$.subscribe({
    next: (v) => console.log('Next ', v),
    complete: () => console.log('Completed!'),
})
