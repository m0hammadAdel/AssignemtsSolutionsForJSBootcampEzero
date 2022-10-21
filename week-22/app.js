// global variables and helper functions
const articlesNum = 6; // select how many articles do you wanna show from the json file
// pushing elements to the body of the page
function pushDataToBody (data) {
  const myFragment = document.createDocumentFragment();
    myFragment.innerHTML = '';
    for(let item of data) {
      myFragment.innerHTML += `<h2>${item.title}</h2>
      <p>${item.description}</p>`;
    };
    document.body.innerHTML += `<hr>${myFragment.innerHTML}`;
}

// -------------------- assignment 1 --------------------
const getData = url => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("No Data Found"));
      }
    };
  })
}

getData("./data.json")
  .then((result) => {
    result.length = articlesNum;
    return result;
  })
  .then((result) => {
    pushDataToBody(result);
  }).catch((rej) => console.log(rej));

// -------------------- assignment 2 --------------------
const ahmedFetchawy = fetch("./data.json")
  .then(result => {
    let data = result.json();
    return data;
  }).then(data => {
    data.length = articlesNum;
    return data;
  }).then(data => {
    console.log(data);
    pushDataToBody(data);
  }).catch(err => console.log(Error(err)))
