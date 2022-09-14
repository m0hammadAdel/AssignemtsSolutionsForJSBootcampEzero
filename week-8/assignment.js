// --------------- assignment 1 ---------------
function sayHello(theName, theGender) {
  console.log(`Hello ${theGender === "Male"?  "Mr " : theGender === "Female" ? "Miss " : ""}${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// --------------- assignment 2 ---------------
function calculate(firstNum, secondNum, operation = 'add') {
  if (!firstNum) {
    console.log('First Number Not Found');
    return ;
  }

  if (!secondNum) {
    console.log('Second Number Not Found');
    return ;
  }

  switch (operation) {
    case 'add':
      console.log(firstNum + secondNum);
      break;
    case 'subtract':
      console.log(firstNum - secondNum);
      break;
    case 'multiply':
      console.log(firstNum * secondNum);
      break;
    default:
      break;
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// --------------- assignment 3 ---------------
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`months => ${theAge *= 12} weeks => ${theAge *= 4} days => ${theAge *= 7} hours => ${theAge *= 24} minutes => ${theAge *= 60} seconds => ${theAge *= 60}`);
  } else {
    console.log('Age Out Of Range');
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// --------------- assignment 4 ---------------
function checkStatus(a, b, c) {
  let name, age, status;
  if (typeof(a) === 'string') {
    name = a;
    if (typeof(b) === 'number') {
      age = b;
      status = c;
    } else {
      age = c;
      status = b;
    }
  } else if (typeof(b) === 'string') {
    name = b;
    if (typeof(a) === 'number') {
      age = a;
      status = c;
    } else {
      age = c;
      status = a;
    }
  } else {
    name = c;
    if (typeof(a) === 'number') {
      age = a;
      status = b;
    } else {
      age = b;
      status = a;
    }
  }
  if(status) console.log(`Hello ${name} Your Age Is ${age}, You are Available For Hire`);
  else console.log(`Hello ${name} Your Age Is ${age}, You are not Available For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// --------------- assignment 5 ---------------
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++)
    document.write(`<option value="${i}">${i}</option>`);
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// --------------- assignment 6 ---------------
function multiply(...args) {
  let result = 1; // we didn't use 0 here because it would ruin the multiplication so we used 1 because it's a multiplicative identity
  for (let i = 0; i < args.length; i++)
    if (typeof(args[i]) === 'number')
      result *= Number.parseInt(args[i]);
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000