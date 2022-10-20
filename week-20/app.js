// ----------------- assignment 1 -----------------
let dateNow = new Date();
let birthDay = new Date("dec 9 ,01");
let dateDiff = dateNow - birthDay;

console.log(dateDiff);

console.log(`${dateDiff / 1000} Seconds`);
console.log(`${dateDiff / 1000 / 60} Minutes`);
console.log(`${dateDiff / 1000 / 60 / 60} Hours`);
console.log(`${dateDiff / 1000 / 60 / 60 / 24} Days`);
console.log(`${dateDiff / 1000 / 60 / 60 / 24 / 30} Month`);
console.log(`${dateDiff / 1000 / 60 / 60 / 24 / 30 / 12} years`);

console.log('#######################');
// ----------------- assignment 2 -----------------
let time = new Date("1970,1,1");
console.log(time);

time.setFullYear("1980", "0", "1");

time.setMilliseconds(1000);

console.log(time);

console.log('#######################');
// ----------------- assignment 3 -----------------
let lastMonthDay = new Date();
lastMonthDay.setDate(0);
console.log(lastMonthDay);
let arrMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

console.log(
  `Previous Month Is ${
    arrMonths[lastMonthDay.getMonth()]
  } And Last Day Is ${lastMonthDay.getDate()}`
);
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

console.log('#######################');
// ----------------- assignment 4 -----------------
let bt1 = new Date("2001 /12 /9"); 
console.log(bt1); 

let bt2 = new Date();
bt2.setFullYear("2001", "12", "9");
bt2.setHours(0);
bt2.setMinutes(0);
bt2.setSeconds(0);
console.log(bt2); 

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

console.log('#######################');
// ----------------- assignment 5 -----------------
let ti = performance.now();

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

let tf = performance.now();

console.log(`Loop Took ${tf - ti} Milliseconds`);

// Needed Output

"Loop Took 1921 Milliseconds."

console.log('#######################');
// ----------------- assignment 6 -----------------
function* gen() {
  let i = 1;
  while (true) {
    let n = 2 * (50 * Math.pow(i, 2) - 80 * i + 37); // try to find pattern online tool to find the right formula
    yield n;
    i++;
  }
}

let generator1 = gen();

console.log(generator1.next()); // {value: 14, done: false}
console.log(generator1.next()); // {value: 154, done: false}
console.log(generator1.next()); // {value: 494, done: false}
console.log(generator1.next()); // {value: 1034, done: false}
console.log(generator1.next()); // {value: 1774, done: false}
console.log(generator1.next()); // {value: 2714, done: false}
console.log(generator1.next()); // {value: 3854, done: false}
console.log(generator1.next()); // {value: 5194, done: false}
console.log(generator1.next()); // {value: 6734, done: false}

console.log('#######################');
// ----------------- assignment 7 -----------------
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  let setNums = new Set();
  for (let x of genNumbers()) {
    setNums.add(x);
  }
  let setLetters = new Set();
  for (let x of genLetters()) {
    setLetters.add(x);
  }

  yield* setNums;
  yield* setLetters;
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

console.log('#######################');
// ----------------- assignment 8 -----------------
import sum from './mod-one.js';
import {a, b, c} from './mod-two.js';

console.log(sum(a, b, c));