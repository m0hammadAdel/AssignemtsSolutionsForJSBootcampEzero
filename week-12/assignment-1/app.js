// select the element in 15 ways

// method 1 
const method1 = document.querySelector('#elzero');
console.log(method1);

// method 2
const method2 = document.querySelector('.element');
console.log(method2);

// method 3 
const method3 = document.querySelector('[name = "js"]');
console.log(method3);

// method 4
const method4 = document.querySelector('div');
console.log(method4);

// method 5
const method5 = document.querySelectorAll('#elzero')[0];
console.log(method5)

// method 6
const method6 = document.querySelectorAll('.element')[0];
console.log(method6)

// method 7
const method7 = document.querySelectorAll('[name = "js"]')[0];
console.log(method7)

// method 8
const method8 = document.querySelectorAll('div')[0];
console.log(method8)

// method 9
const method9 = document.getElementById('elzero');
console.log(method9);

// method 10
const method10 = document.getElementsByClassName('element')[0];
console.log(method10);

// method 11
const method11 = document.getElementsByTagName('div')[0];
console.log(method11);

// method 12
const method12 = document.getElementsByName('js')[0];
console.log(method12);

// method 13
const method13 = document.body.childNodes[1];
console.log(method13)

// method 14
const method14 = document.body.children[0];
console.log(method14);

// method 15
const method15 = document.body.firstElementChild;
console.log(method15);