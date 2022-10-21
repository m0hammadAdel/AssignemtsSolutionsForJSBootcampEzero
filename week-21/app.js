// --------------------- assignments ---------------------
let xhr = new XMLHttpRequest();
let dataUpdated;
xhr.open("GET", "./articles.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    let mainData = JSON.parse(this.responseText);
    mainData.forEach(article => {
      article.section = 'All';
    });
    console.log(mainData);
    // assignment 3
    dataUpdated = JSON.stringify(mainData);
    // assignment 4
    const container = document.createElement('div');
    container.id = 'data';
    for (let article of mainData) {
      container.innerHTML += `<hr><h2>${article.title}</h2>
      <p>${article.content}</p>
      <p>${article.name}</p>
      <p>${article.section}</p>`;
    }
    document.body.appendChild(container);
  }
}

// this wasn't necessary but I did it to practice the event loop
setTimeout( _ => {
  console.log(dataUpdated);
}, 1)
