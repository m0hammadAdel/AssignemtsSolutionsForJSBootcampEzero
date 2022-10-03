// ---------------- global variables ----------------
const mainElement = document.querySelector('[title = "Current"]');
const classesArea = document.querySelector('.classes-list div');
const addClasses = document.querySelector('.classes-to-add');
const removeClasses = document.querySelector('.classes-to-remove');

// ---------------- main program ----------------
displayClasses(mainElement.classList);

addClasses.onblur = _ => {
  const newClasses = addClasses.value.split(' ');
  displayClasses(newClasses);
  addClasses.value = '';
};

removeClasses.onblur = _ => {
  const newClasses = removeClasses.value.split(' ');
  deleteClasses(newClasses);
  removeClasses.value = '';
};

function displayClasses(classes) {
  classes.forEach(ele => {
    mainElement.classList.add(ele.toLowerCase());
    const newSpan = document.createElement('span');
    newSpan.textContent = ele.toLowerCase();
    classesArea.appendChild(newSpan);
  });
}

function deleteClasses (classes) {
  const spans = classesArea.querySelectorAll('span');
  for (const item of classes) {
    mainElement.classList.remove(item.toLowerCase());
    spans.forEach(span => {
      if (span.textContent === item.toLowerCase()) span.remove();
    })
  }
  if (mainElement.classList.length === 0) classesArea.textContent = "No Classes To Show"; 
}