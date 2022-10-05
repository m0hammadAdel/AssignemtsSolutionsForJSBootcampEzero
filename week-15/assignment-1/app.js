const mainDiv = document.querySelector('.sample');
const fontFamily = document.getElementById('fonts');
const fontColor = document.getElementById('colors');
const fontSize = document.getElementById('size');

mainDiv.style.color = window.localStorage.color? window.localStorage.color : fontColor.value;
mainDiv.style.fontFamily = window.localStorage.family? window.localStorage.family :  fontFamily.value;
mainDiv.style.fontSize =  window.localStorage.size? window.localStorage.size : fontSize.value;

fontColor.onchange = _ => {
  window.localStorage.setItem('color', fontColor.value);
  mainDiv.style.color = fontColor.value;
}

fontFamily.onchange = _ => {
  window.localStorage.setItem('family', fontFamily.value);
  mainDiv.style.fontFamily = fontFamily.value;
}

fontSize.onchange = _ => {
  window.localStorage.setItem('size', fontSize.value);
  mainDiv.style.fontSize = fontSize.value;
}
