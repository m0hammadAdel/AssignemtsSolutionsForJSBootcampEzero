// ---------- assignment 1 ----------
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// ---------- assignment 2 ----------
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// ---------- assignment 3 ----------
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne).concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ---------- assignment 4 ----------
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// I used words.indexOf("Facebook") = 1 and words.length - words.length = 0
console.log(words[words.length - words.indexOf("Facebook")][words.length - words.length].slice(words.indexOf("Facebook") + words.indexOf("Facebook")).toUpperCase()); // ZERO

// ---------- assignment 5 ----------
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// the find method can be found easily by seraching on how to find element in array
if (haystack.includes(needle) && haystack.indexOf(needle) !== -1 && haystack.find(element => element === needle)) console.log('found');

// ---------- assignment 6 ----------
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2).sort().splice(arr2.length, arr1.length).join('').toLowerCase();

console.log(allArrs); // fxy


// ---------- the challange ----------
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(my[my.indexOf('Elham')].slice(--zero, --counter) + my[counter].slice(counter)); // "Elzero"

console.log(my[counter].slice(- counter)); // "rO" honestly I was too lazy to figure how to make o capitalized