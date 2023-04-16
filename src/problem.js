import { interval } from "rxjs";
import { map, filter, take, scan } from "rxjs/operators";

const btn = document.getElementById("interval");
const rxjsBtn = document.getElementById("rxjs");
const display = document.querySelector("#problem .result");

const people = [
  { name: "Vladilen", age: 25 },
  { name: "Elena", age: 17 },
  { name: "Ivan", age: 18 },
  { name: "Igor", age: 14 },
  { name: "Lisa", age: 32 },
  { name: "Irina", age: 23 },
  { name: "Oleg", age: 20 },
];

rxjsBtn.addEventListener("click", () => {
  rxjsBtn.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      filter((v) => people[v].age >= 18),
      map((v) => people[v].name),
      scan((acc, v) => acc.concat(v), [])
    )
    .subscribe({
      next: (res) => display.textContent = res.join(" "),
      complete: () => rxjsBtn.disabled = false,
    });
});
