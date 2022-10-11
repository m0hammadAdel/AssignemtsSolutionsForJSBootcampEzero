// ------------------- assignment 1 -------------------
const setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
// printing last number
console.log([...setOfNumbers].pop()); // pop method will remove the element from the array yet will return it

// ------------------- assignment 2 -------------------
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

const myUniqueFriends = new Set(myFriends.sort());
console.log(myUniqueFriends);
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// ------------------- assignment 3 -------------------
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

const myMapInfo = new Map(Object.entries(myInfo));
console.log(myMapInfo);
console.log(myMapInfo.size);
console.log(myMapInfo.has('role'));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// ------------------- assignment 4 -------------------
let theNumber = 100020003000;

console.log((+[ ...new Set(theNumber.toString())].sort().join("")));

// Needed Output
// 123

// ------------------- assignment 5 -------------------
let theName = "Elzero";

console.log(Array.from(theName));
console.log(theName.split(''));
console.log([...theName]);
console.log(new Set(theName));
console.log(Object.values(theName));


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// ------------------- assignment 6 -------------------
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

for (let i = 0; i < chars.length; i++)
  if (typeof chars[i] === "number")
    chars.unshift(chars.splice(i, 1));

let firstCharIndex = chars.findIndex(e => typeof e === "string");

chars.copyWithin(0, firstCharIndex);
console.log(chars)

// ------------------- assignment 7 -------------------
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([numsOne + ',' + numsTwo]);
console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));

// Needed Output
// [1, 2, 3, 4, 5, 6]

// ------------------- assignment 8 -------------------
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// you try to get all possible solutions for multiplications for 210 and find the nearest possible one withing variables so that 7 (sum of two lengths) * 30 (biggest element in n1)
console.log([...n1, ...n2].length * Math.max(...n1));

// Needed Output
// 210