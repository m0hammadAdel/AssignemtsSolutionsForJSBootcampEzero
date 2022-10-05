const promptMsg = prompt('Print Number From – To', '5-10');
const numbers = promptMsg.split('-').sort();
// this sorts numbers in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

const myDiv = document.createElement('div');
for (let i = +numbers[0]; i <= +numbers[1]; i++) {
  const subDiv = document.createElement('div');
  subDiv.textContent = i;
  myDiv.appendChild(subDiv);
}

document.body.appendChild(myDiv);