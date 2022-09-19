// select all images tags
const imgs = document.getElementsByTagName('img');

for(let i = 0; i < imgs.length; i++){
  if (imgs[i].hasAttribute("alt")){
    imgs[i].alt = "Old";
  }
  else{
    imgs[i].alt = "Elzero New";
  }  
}