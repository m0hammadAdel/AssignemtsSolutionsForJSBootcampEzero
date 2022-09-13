// ----------- assignment 1 -----------
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end ; i += 10) {
    if (i === exclude) continue;
    console.log(i);
}

// ----------- assignment 2 -----------
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2 ; i >= stop ; i--) {
    if (i < 10) {
        console.log(end2 + '' + i);
        continue;
    }
    console.log(i + '');
}

// ----------- assignment 3 -----------
let start3 = 1;
let end3 = 6;
let breaker = 2;

for(let i = start3; i <= end3; i++){
    console.log(i);
    for(let j = breaker; j < end3; j+=breaker){
        console.log(`-- ${j}`);
    }
}

// ----------- assignment 4 -----------
let index = 10;
let jump = 2;
let end4 = 0;

let i = index;
for (;;) {
    console.log(i);
    i -= jump;
    if (i <= jump) break;
}

// Output
10
8
6
4

// ----------- assignment 5 -----------
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0, counter = 0; i < friends.length; i++, counter++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        counter--;
        continue;
    }
    console.log(`${counter+1} => ${friends[i]}`);
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

// ----------- assignment 6 -----------
let start6 = 0;
let swappedName = "elZerO";
let result = '';

for (let i = start6; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        result += swappedName[i].toLowerCase();
    }
    else {
        result += swappedName[i].toUpperCase();
    }
}

console.log(result);
// Output
"ELzERo"

// ----------- assignment 7 -----------
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

/* Output
2
3
4
*/
for(let i = start7; i < mix.length; i++){
    if(typeof mix[i] === "string" || i === mix[start7]-mix[start7]){ // professionals have their own ways
        continue;
    }
    else{
        console.log(mix[i]);
    }
}

// ----------------------------- assignment from 54 to 56 -----------------------------
let friend = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexn = 0;
let counter = 0;

while (indexn < friend.length) {
    if (typeof(friend[indexn]) === 'string' && !friend[indexn].startsWith('A')) {
        counter ++;
        console.log(`${counter} => ${friend[indexn]}`);
    }
    indexn ++;
}

// Output
"1 => Sayed"
"2 => Mahmoud"