// global variables to use in all assignments
let a, b, c, d, e, f, g, w, h1, h3, t, u, j, o, t_price, j_price, or;

// ----------------- assignment 1 -----------------
let myNumbers = [1, 2, 3, 4, 5];

[a, , , , e] = myNumbers;

console.log(a * e); // 5

console.log('______________________________________');
// ----------------- assignment 2 -----------------

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

[a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

console.log('______________________________________');
// ----------------- assignment 3 -----------------

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
arr3 = arr3.concat(arr1);
// Write Your Destructuring Assignment Here
[, a, b, c, ,] = arr3;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed

console.log('______________________________________');
// ----------------- assignment 4 -----------------

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
({age:a, working:w, country:c , hobbies:[h1, ,h3]} = member);

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

console.log('______________________________________');
// ----------------- assignment 5 -----------------

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
({title:t, developer:d, releases:c} = game);
({"Oath In Felghana":[u, j], "Ark Of Napishtim":{US: u_price, JAP: j_price}, Origin: or} = c);
o = Object.keys(c)[0];
a = Object.keys(c)[1];


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

console.log('______________________________________');
// ----------------- assignment 6 -----------------

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

[a, b, c] = myFriends;

function printChosen({title, age, available, skills:[, s2]} = a) {
  console.log(title);
  console.log(age);
  console.log(available);
  console.log(s2);
}

switch (chosen) {
  case 1: 
    printChosen(a);
    break;
  case 2:
    printChosen(b);
    break;
  case 3:
    printChosen(c);
    break;
  default:
    break;
}