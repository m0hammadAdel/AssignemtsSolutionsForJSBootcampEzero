// ---------- first assignment start ----------
// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log('' + numberOne + numberTwo); // Normal Concatenate => 1020
console.log(typeof('' + numberOne + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
    Normal Concatenate
    20
    10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
    Template Literals Way
    20
    10
*/
console.log(' ---------- first assignment end ---------- ');

// ---------- first assignment end ----------

// ---------- second assignment start ----------

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// ---------- second assignment end ----------


// ---------- third assignment start ----------

console.log('\`I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n\+\+ With \+\+\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`');

// ---------- third assignment end ----------


// ---------- forth assignment start ----------
let a = 21;
let b = 20;

console.log(`_${a}_${''+b+a}_${''+b+a}_${''+b+a}_${b}`); // _21_2021_2021_2021_20_
// ---------- forth assignment end ----------