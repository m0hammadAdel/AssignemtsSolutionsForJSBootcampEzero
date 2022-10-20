// ----------------------------- assignment 1 -----------------------------
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w{2}\d:[\d\d\d\d:]{4,}\d{4}/;
// [\d\d\d\d:]{4}

console.log(ipRe.test(ip));
console.log(ip.match(ipRe));

// ----------------------------- assignment 2 -----------------------------
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /\bOs\d*O\b/g;

console.log(specialNames.match(specialNamesRe));
// Output
// ['Os10O', 'OsO', 'Os100O']

// ----------------------------- assignment 3 -----------------------------
let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe));

// ----------------------------- assignment 4 -----------------------------
let explainRegEx = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?:\/\/ :: it require to have a http at least and if there is a letter s or not accepts both (http;//, https://)
// (?:[-\w]+\.)? this allow to add www. as the [take any character - and any word] then followed by . and the whole pattern can be ignored because the ?
// ([-\w]+)\. :: to put any words together but the whole pattern won't match if that group didn't occurred
// (?:\.\w+)?\/?.* :: the group do the same as the www. except the dot comes at the end and allow you to add more domains like .ae.org .fe.com etc..

// ----------------------------- assignment 5 -----------------------------
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRe = /\d{1,2}\/?\s?-?\d{1,2}\/?\s?-?\d{2,4}/; // Write Pattern Here

console.log(date1.match(dateRe)); // "25/10/1982"
console.log(date2.match(dateRe)); // "25 - 10 - 1982"
console.log(date3.match(dateRe)); // "25 10 1982"
console.log(date4.match(dateRe)); // "25 10 82"

// ----------------------------- assignment 6 -----------------------------
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?(\w+.)(\w+).*/i;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));