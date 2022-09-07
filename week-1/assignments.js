// ---------- assignment 2 ----------

// this to write the element on th page
document.write(`<h1>Elzero</h1>`);
// this selects the element and apply wanted style to it
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'cemter';
document.querySelector('h1').style.fontFamily = 'Arial';

// ---------- assignment 3 ----------

console.log('%cElzero %cWeb %cSchool', 'font-size = 40px; color: red', 'font-weight: bold; color: green', 'background-color: blue; color: white');
console.log('-------------------------------------');

// ---------- assignment 4 ----------

// more info: https://developer.mozilla.org/en-US/docs/Web/API/console/group
console.group('Group 1');
console.log('Message One');
console.log('Nessage Two');
console.group('Child Group');
console.log('Message One');
console.log('Nessage Two');
console.group('Grand Child Group');
console.log('Message One');
console.log('Nessage Two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log('Message One');
console.log('Nessage Two');
console.groupEnd();
console.log('-------------------------------------');

// ---------- assignment 5 ----------

console.table(['Elzero', 'Ahmed', 'Sameh', 'Gamal', 'Aya']);
console.log('-------------------------------------');

// ---------- assignment 6 ----------

console.log("Iam In Console");
// console.clear();
document.write("Iam In Page");
// document.body.innerText = '';
// those are the solution but they will remove everything from the page and console
