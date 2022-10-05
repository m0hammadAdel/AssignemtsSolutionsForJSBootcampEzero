const div = document.querySelector('.counter');

function countDown() {
  div.textContent -= 1;
  if (div.textContent === '5') window.open('https://elzero.org/', '_blank', 'width=400,height=400,right=0,top=0');
  else if (div.textContent === '0') clearInterval(counter);
}

const counter = setInterval(countDown, 1000);

// let div = document.querySelector("div");

// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countdown, 1000);