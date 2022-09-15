// ---------------- assignment 1 ----------------
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Write Your Code Here
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
      let Fname = zName.slice(0,zName.indexOf(" "));
      let Lname = zName.slice(zName.indexOf(" "),zName.length);
      return `${Fname} ${Lname[1].toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
      let age = zAge.slice(0, zAge.indexOf(" "))
      return  `Your Age Is ${age}`;
      
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
      return zCountry.slice(0, 2).toUpperCase();
    }
    function fullDetails() {
      return `Hello ${namePattern(zName)} ${ageWithMessage(zAge)} You Live In ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// ---------------- assignment 2 ----------------
let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ---------------- assignment 3 ----------------
let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ---------------- assignment 4 ----------------
function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++)
    if(!Number.isNaN(Number.parseInt(data[i]))) sum += Number.parseInt(data[i]);
  sum > 0 ? console.log(sum) : console.log('All Is Strings');
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings