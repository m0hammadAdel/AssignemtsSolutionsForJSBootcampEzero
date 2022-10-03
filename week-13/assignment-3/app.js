document.querySelector('p').remove();
const mainDiv = document.querySelector('.our-element');
const topDiv = document.createElement('div');
const bottomDiv = document.createElement('div');
topDiv.classList.add('start');
topDiv.title = 'Start Element';
topDiv.dataset.value = 'Start';
topDiv.textContent = 'Start';
mainDiv.before(topDiv);
bottomDiv.classList.add('end');
bottomDiv.title = 'End Element';
bottomDiv.dataset.value = 'End';
bottomDiv.textContent = 'End';
mainDiv.after(bottomDiv);