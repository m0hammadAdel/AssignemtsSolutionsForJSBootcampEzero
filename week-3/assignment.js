// ---------- assignemnt 1 ---------
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 160 * 10 * 400); // 0

// ---------- assignemnt 2 ---------
let num = 3;

// Solution One
console.log(num * (true + true)); // 6

// Solution Two
console.log(num ** num / num - num); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num * (num - true)); // 6

// Solution Five
console.log(num += num); // 6

// and here is five ways to create number 6 without using any numbers and using booleen values

// ---------- assignemnt 3 ---------
let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(number * (true + true)); // 20

// Solution Three
console.log(number * number / (number / (true + true))); // 20

// Solution Four
console.log(Number(number) + Number(number)); // 20

// ---------- assignemnt 4 ---------
let points = 10;

points ++;
points ++;
points ++;
// there is something called loops will be intruced shortly will make this a lot easier

console.log(points); // 13

points --;
points --;
points --;
points --;
points --;

console.log(points); // 8;

// challange 2
let d = "-100";
let e = "20";
let g = true;
let f = 30;

console.log(+e * -d);
console.log(-d + ++g * ++e + ++f);
