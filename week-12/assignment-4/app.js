// select main nodes
const one = document.querySelector('.one');
const two = document.querySelector('.two');

one.title = one.className;
two.title = two.className;
one.textContent = one.title;
two.textContent = two.title + " " + two.attributes.length;