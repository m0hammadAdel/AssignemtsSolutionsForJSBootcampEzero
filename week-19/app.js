// ---------------- assignment 1 ----------------
class Car {
  constructor (n, m, p) {
    this.name = n;
    this.model = m;
    this.price = p;
  }
  run() {
    console.log('car is running');
  }
  stop() {
    console.log('car is stopped');
  }
  printMsg() {
    console.log(`Car One Name Is ${this.name} And Model Is ${this.model} And Price Is ${this.price}`)
  }
}

const carOne = new Car('Mg', 2022, 500000);
const carTwo = new Car('BMW', 2020, 400000);
const carThree = new Car('Toyota', 2017, 30000);

carOne.printMsg();
carOne.run();
// ---------------- assignment 2 ---------------- 
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size = 'unknown'){
    super(name, serial, price);
    this.size = size;
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} and size is ${this.size}`;
  }
}


let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// ---------------- assignment 3 ---------------- 
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData() {
    let cardNum = this.#c.toString().split("-").join().match(/(\d{4})/g).join("-");
    return `Hello ${this.u} Your Credit Card Number Is ${cardNum}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// ---------------- assignment 5 ---------------- 
// Write Your Code Here
String.prototype.addLove = function () {
  return `I love ${this} web school `;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// ---------------- assignment 6 ---------------- 
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  country: {
    enumerable: false,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}


myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}