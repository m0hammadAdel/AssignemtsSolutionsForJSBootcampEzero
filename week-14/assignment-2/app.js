const msg = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');

setTimeout( _ => msg.classList.remove('hide-container') , 5000);

closeBtn.onclick = _ => {
  msg.classList.add('hide-container');
}