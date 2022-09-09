// ---------- assignment 1 ----------
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(0x186A0); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(5e4 * 2); // 100000
console.log(2e4 * 5); // 100000
console.log(10e3 * 10); // 100000
console.log(99999 +1); // 100000
console.log(Math.round(99999.7)); // 100000

// ---------- assignment 2 ----------
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// ---------- assignment 3 ----------
console.log(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER);

// ---------- assignment 4 ----------
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57

// ---------- assignment 5 ----------
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// ---------- assignment 6 ----------
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(Math.trunc(flt)); // 10

// ---------- assignment 6 ----------
console.log(Math.floor(Math.random() * 5));
