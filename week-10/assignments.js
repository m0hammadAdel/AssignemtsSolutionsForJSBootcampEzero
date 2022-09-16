const helperConcat = (acc, cur) => `${acc}${cur}`;

// ----------------- assignment 1 -----------------
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(ele => isNaN(Number.parseInt(ele))? ele : '').reduce(helperConcat);
console.log(newMix);
// Elzero

// ----------------- assignment 2 -----------------
let myString = "EElllzzzzzzzeroo";

let newString = myString.split('').filter((ele , index, arr) => arr.indexOf(ele) === index).reduce(helperConcat);
console.log(newString);
// Elzero

// ----------------- assignment 3 -----------------
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce((acc, curVal) => acc.concat(curVal), []).reduce(helperConcat);
console.log(newArray);
// Elzero

// ----------------- assignment 4 -----------------
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let convNums = numsAndStrings.filter(num => typeof(num) === 'number').map((ele) => -ele);
console.log(convNums);
// [-1, -10, 10, 20, -5, -3]

// ----------------- assignment 5 -----------------
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, curr) => curr % 2 === 0 ? acc * curr : acc + curr, 1);
console.log(result);
// 500