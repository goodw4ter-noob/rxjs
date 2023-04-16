import { Subject, BehaviorSubject, ReplaySubject } from "rxjs";

document.addEventListener('click', performSubject);

function performSubject() {
    const stream$ = new ReplaySubject(2); // указываем размер буфера
    // const stream$ = new Subject();
    // const stream$ = new BehaviorSubject('new'); // указываем начальное значение
    
    stream$.next('first SUBJECT');
    stream$.next('second SUBJECT');
    stream$.next('third SUBJECT');
    stream$.subscribe(val => console.log('Value', val));

    stream$.unsubscribe();
    document.removeEventListener('click', performSubject);
}