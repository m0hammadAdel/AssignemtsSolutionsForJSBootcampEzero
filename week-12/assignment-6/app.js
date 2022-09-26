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

// let numElements = document.querySelector("[name ='elements']");
// let elementText = document.querySelector("[name = 'texts']");
// let divOrselect = document.querySelector("[name = 'type']");
// let result = document.querySelector("[class='results']");
// let form = document.forms;

// numElements.setAttribute("min","0")
// form[1].onsubmit = function  (e){
//     e.preventDefault();
//     document.querySelectorAll(".box").forEach(function(e) {
//       e.remove()});
  
//     for(let i = 0;i < numElements.value; i++){
//       let myEle = document.createElement(divOrselect.value);
//       let mytext = document.createTextNode(elementText.value);
//       myEle.className = "box";
//       myEle.title = "Element";
//       myEle.id = `id-${i+1}`;
//       myEle.appendChild(mytext);
//       result.appendChild(myEle);

//     }
    
//   }