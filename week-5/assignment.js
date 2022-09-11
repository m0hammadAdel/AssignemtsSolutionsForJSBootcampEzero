// ---------------------- from 31 to 32 ----------------------
// --------- assignment 1 ----------
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >=  +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" < 10); // true
console.log(! 20 == false); // true

// --------- assignment 2 ----------
let number1 = 10;
let number2 = 20;

console.log(number1 < number2); // true
console.log(number2 > number1); // true
console.log(number1 <= number2); // true
console.log(number2 >= number1); // true
console.log(! number1 < number2); // true
console.log(! number2 < number1); // true

// --------- assignment 3 ----------
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

console.log("______________________________________");

// ---------------------- from 33 to 37 ----------------------
// --------- assignment 1 ----------
// Test Case 1
let n = 9;
if (n < 10) console.log('00' + n)

// Test Case 2
let n2 = 20; // "020"
if (n2 > 10 && n2 < 100) console.log('0' + n2);

// Test Case 3
let n3 = 110; // "110"
if (n3 >= 100) console.log('' + n3);

// --------- assignment 2 ----------
let number = 9;
let str = "9";
let str2 = "20";

// Output
if (number == str) console.log("{num1} Is The Same Value As {str}");
if (number == str && typeof(number) !== typeof(str)) console.log("{num1} Is The Same Value As {str} But Not The Same Type");
if (number !== str2) console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
if (typeof(str) === typeof(str2) && str !== str2) console.log("{str} Is The Same Type As {str2} But Not The Same Value");

// --------- assignment 3 ----------
let no1 = 10;
let no2 = 30;
let no3 = "30";

// Needed Output
if (no3 > no1 && typeof(no3) !== typeof(no2)) console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"
);

if (no3 > no1 && no3 == no2 && typeof(no3) !== typeof(no2)) console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
);

if (no3 !== no1 && typeof(no3) !== typeof(no2)) console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
);


// --------- assignment 4 ----------
// Edit What You Want Here

let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
console.log("______________________________________");

// ---------------------- from 38 to 39 ----------------------
let day = "   Thursday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day =day.trim();
day = day[0].toUpperCase() + day.slice(1)

switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    
    default:
        console.log("Its Not A Valid Day");
}
