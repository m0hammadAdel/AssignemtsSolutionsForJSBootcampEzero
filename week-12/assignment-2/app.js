// select all images elements
const img = document.querySelectorAll('div img');

// add link to all images
for (let i = 0; i < img.length; i++) {
  img[i].src = `https://elzero.org/wp-content/themes/elzero/imgs/logo.png`;
  img[i].alt = 'Elzero Logo';
}
