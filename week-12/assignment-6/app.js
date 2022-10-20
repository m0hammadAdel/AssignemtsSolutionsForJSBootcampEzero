const elementsNum = document.querySelector('[ name="elements"]');
const elementsText = document.querySelector('[name="texts"]');
const elementsType = document.querySelector('[name="type"]');
const result = document.querySelector('.results');

document.forms[0].onsubmit = (e) => {
  
  e.preventDefault();
  result.innerHTML = '';
  
  for (let i = 0; i < elementsNum.value; i++) {
    const newElement = document.createElement(elementsType.value);
    newElement.textContent = elementsText.value;
    newElement.classList.add('box');
    newElement.title = 'Element';
    newElement.id = `id-${i+1}`;
    console.log(newElement);
    result.appendChild(newElement);
  }
}